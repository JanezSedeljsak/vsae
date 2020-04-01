from flask import request
from flask import Blueprint
from api.utils.helpers import ServerMethods
from api.utils.vsae.formater import EquationFormating

# import modules for binary tree parsing
from api.modules.binarytree.stacktotree import Index as buildTreeFromExpression
from api.modules.binarytree.treeevaulute import Evaulute


btRoutes = Blueprint("binary_tree_routes", __name__, url_prefix='/api/bt/v3')


@btRoutes.route('/bjs', methods=['POST']) # build json structure
def bjs():
    data = request.json
    expression = data['expression']

    fExpression, baseFormat = EquationFormating.defFormat(expression)

    res = Evaulute(buildTreeFromExpression(fExpression), baseFormat, fExpression)._getSelf()

    return ServerMethods.dispatchJSON({ 'base': res })
