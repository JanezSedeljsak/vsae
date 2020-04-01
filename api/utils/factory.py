import os
import logging
import sys
from flask import Flask, send_from_directory, request
from api.utils.helpers import ServerMethods
from flask_cors import CORS

from api.utils.imgtotext import ImgToText
from api.routes.v3.evaluationroutes import evalRoutes
from api.routes.v3.btreeroutes import btRoutes
from api.utils.responses import response_with
import api.utils.responses as resp

def create_app(config):
    app = Flask(__name__, static_folder='./../../frontend/build')
    app.config.from_object(__name__)
    CORS(app)

    @app.after_request
    def add_header(response):
        return response

    app.register_blueprint(evalRoutes)
    app.register_blueprint(btRoutes)

    @app.route('/api/base/heartbeat', methods=['GET', 'POST'])
    def heartbeat():
        return ServerMethods.dispatchJSON({ 'beat': True })

    @app.route('/api/base/tfi', methods=['POST']) # text from image
    def tfi():
        data = request.json
        base64Img = data['encodedImage']

        res = ImgToText(base64Img)

        return ServerMethods.dispatchJSON({ 'equation': res._getEquation() })

    # serve react
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and os.path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')

    logging.basicConfig(stream=sys.stdout,
                        format='%(asctime)s|%(levelname)s|%(filename)s:%(lineno)s|%(message)s',
                        level=logging.DEBUG)

    @app.errorhandler(400)
    def bad_request(e):
        logging.error(e)
        return response_with(resp.BAD_REQUEST_400)

    @app.errorhandler(500)
    def server_error(e):
        logging.error(e)
        return response_with(resp.SERVER_ERROR_500)

    @app.errorhandler(404)
    def not_found(e):
        logging.error(e)
        return response_with(resp.NOT_FOUND_HANDLER_404)

    return app
