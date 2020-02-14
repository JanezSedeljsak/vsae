from flask import Flask, redirect, send_from_directory
import json

# import modules for binary tree parsing
from modules.binary_tree.ToTreeConv import Index as build_tree
from modules.binary_tree.TreeEvaluation import Index as binaryTreeEvaluation

# import modules for shunting yard algorithm
from modules.shunting_yard_algo.Algorithm import Index as shuntingYardAlgorithmEvaluation 

app = Flask(__name__, static_url_path='')
app.config.from_object(__name__)

class ServerMethods:
    @staticmethod
    def dispatchJSON(obj):
        return json.dumps(obj, separators=(',', ':'))

@app.route('/vsae-api/binary-tree-evaluation')
def bte():
    expression = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3'
    res = "{0}".format(binaryTreeEvaluation(build_tree(expression)))
    return ServerMethods.dispatchJSON({'result': res})

@app.route('/vsae-api/shunting-yard-evaluation')
def she():
    expression = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3'
    res = "{0}".format(shuntingYardAlgorithmEvaluation(expression))
    return ServerMethods.dispatchJSON({'result': res})

@app.route('/')
def r():
    return redirect("/doc", code=302)

@app.route('/doc')
def doc():
    return send_from_directory('static', 'index.html')