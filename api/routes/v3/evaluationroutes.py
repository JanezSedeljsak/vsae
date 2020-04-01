from flask import Blueprint
from flask import request
from api.utils.helpers import ServerMethods
from api.utils.vsae.formater import EquationFormating
from api.utils.vsae.reformater import EquationREFormating

# import modules for binary tree parsing
from api.modules.binarytree.stacktotree import Index as buildTreeFromExpression
from api.modules.binarytree.treeevaulute import Evaulute

# import modules for shunting yard algorithm
from api.modules.shuntingyardalgorithm.algorithm import Index as shuntingYardAlgorithmEvaluation


evalRoutes = Blueprint("evaluation_routes", __name__, url_prefix='/api/v3/eval')

@evalRoutes.route('/sya', methods=['POST']) # shunting yard algorithm evaluate
def sya():
    data = request.json
    expression = data['expression']

    res = f'{shuntingYardAlgorithmEvaluation(expression)}'

    return ServerMethods.dispatchJSON({'result': res, 'algorithm': 'shunting yard algorithm'})


@evalRoutes.route('/bte', methods=['POST']) # binary tree evaluate
def bte():
    data = request.json
    expression = data['expression']

    fExpression, baseFormat = EquationFormating.defFormat(expression)

    bTree = buildTreeFromExpression(fExpression)
    res = f'{Evaulute._evaluteAndGetOnlyResult(bTree)}'

    return ServerMethods.dispatchJSON({'result': res, 'algorithm': 'binary tree evaluation'})