from flask import Flask, send_from_directory, request, jsonify
from modules.core.HelperMethods import ServerMethods, EquationFormating
from flask_cors import CORS
import os

# import modules for binary tree parsing
from modules.binary_tree.ToTreeConv import Index as buildTreeFromExpression
from modules.binary_tree.TreeEvaluation import Evaulute
from modules.binary_tree.TreeToJson import Index as treeToJson
from modules.core.ImgToText import ImgToText

# import modules for shunting yard algorithm
from modules.shunting_yard_algo.Algorithm import Index as shuntingYardAlgorithmEvaluation 

app = Flask(__name__, static_folder='frontend/build')
app.config.from_object(__name__)
CORS(app)

@app.route('/api/bte', methods=['POST']) # binary tree evaluation
def bte():
    data = request.json
    expression = data['expression']
    
    #res = "{0}".format(binaryTreeEvaluation(buildTreeFromExpression(expression)))
    return ServerMethods.dispatchJSON({'result': []})

@app.route('/api/sye', methods=['POST']) # shunting yard algorithm
def sye():
    data = request.json
    expression = data['expression']

    res = "{0}".format(shuntingYardAlgorithmEvaluation(expression))
    return ServerMethods.dispatchJSON({'result': res})

@app.route('/api/tfi', methods=['POST']) # text from image
def tfi():
    data = request.json
    base64Img = data['encodedImage']

    #res = ImgToText(base64Img)

    return ServerMethods.dispatchJSON({ 'equation': '5+5' })

@app.route('/api/bjs', methods=['POST']) # build json structure
def bjs():
    data = request.json
    expression = data['expression']

    fExpression, baseFormat = EquationFormating.defFormat(expression)

    res = Evaulute(buildTreeFromExpression(fExpression), baseFormat, fExpression)._getSelf()

    #res = treeToJson(buildTreeFromExpression(fExpression))
    return ServerMethods.dispatchJSON({ 'base': res })

# serve react
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')
