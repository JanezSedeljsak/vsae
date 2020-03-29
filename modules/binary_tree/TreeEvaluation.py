import operator
from modules.binary_tree.Node import Index as Node
from modules.core.VsaeMath import MathOperations as VSAEMath
from modules.binary_tree.TreeToJson import Index as toJson

class Evaulute:

    primaryTree = None
    steps = []
    base = {}

    def __init__(self, tree, initialEq, VSAEExpression, buildForDrawing=True):
        self.primaryTree = tree
        self.steps = [Evaulute._genStep(self.primaryTree)]
        evaluation = self.evaluate(self.primaryTree)

        updatedSteps = []
        updatedTree = self.primaryTree
        for key, step in enumerate(self.steps):
            if key != 0:
                updatedTree = Evaulute._buildWithoutBrach(updatedTree, step['cTree'].ident, step['val'])
            updatedSteps.append({
            'left': step['left'],
            'right': step['right'],
            'result': step['val'],
            'operation': step['oper'],
            'isFunction': (True if VSAEMath._isValidFunction(step['right']) else False),
            'tree': toJson(updatedTree)
        })

        self.base = {
            'equation': initialEq,
            'VSAEExpression': VSAEExpression,
            'result': evaluation,
            'steps': updatedSteps,
            'jsonTree': toJson(tree)
        }

    def _getSelf(self):
        return self.base

    def addStep(self, step):
        self.steps.append(step)

    def evaluate(self, tree):
        if tree.left and tree.right:
            left = self.evaluate(tree.left)
            right = self.evaluate(tree.right)
            operation = tree.data
            val = VSAEMath._baseMathOperation(operation, left, right)
            self.addStep(Evaulute._genStep(self.primaryTree, left, right, operation, val, tree))
            return val

        else:
            return tree.data

    @staticmethod
    def _genStep(_primaryTree, _left=None, _right=None, _oper=None, _val=None, _cTree=None):
        return {
            'left': _left,
            'right': _right,
            'oper': _oper,
            'val': _val,
            'primaryTree': _primaryTree,
            'cTree': _cTree
        }


    @staticmethod
    def _buildWithoutBrach(tree, id, newVal):
        return Node(
            tree.data,
            left=Evaulute._buildWithoutBrach(tree.left, id, newVal) if tree.left else None,
            right=Evaulute._buildWithoutBrach(tree.right, id, newVal) if tree.right else None,
            ident=tree.ident
        ) if tree.ident != id else Node(newVal, left=None, right=None, ident=id)