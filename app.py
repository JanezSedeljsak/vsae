from flask import Flask, redirect, send_from_directory, render_template
import json
import os

# import modules for binary tree parsing
from modules.binary_tree.ToTreeConv import Index as build_tree
from modules.binary_tree.TreeEvaluation import Index as binaryTreeEvaluation

# import modules for shunting yard algorithm
from modules.shunting_yard_algo.Algorithm import Index as shuntingYardAlgorithmEvaluation 

app = Flask(__name__, static_folder='frontend/build')
app.config.from_object(__name__)

class ServerMethods:
    @staticmethod
    def dispatchJSON(obj):
        return json.dumps(obj, separators=(',', ':'))

@app.route('/api/bte') # binary tree evaluation
def bte():
    expression = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3'
    res = "{0}".format(binaryTreeEvaluation(build_tree(expression)))
    return ServerMethods.dispatchJSON({'result': res})

@app.route('/api/sye') # shunting yard algorithm
def sye():
    expression = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3'
    res = "{0}".format(shuntingYardAlgorithmEvaluation(expression))
    return ServerMethods.dispatchJSON({'result': res})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')