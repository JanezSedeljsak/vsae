import operator
from api.modules.binarytree.node import Index as Node
from api.utils.vsae.vmath import MathOperations as VSAEMath
from api.modules.binarytree.treetojson import Index as toJson

class Evaulute:

    primaryTree = None
    steps = []
    base = {}

    def __init__(self, tree, initialEq, VSAEExpression, buildForDrawing=True):
        self.primaryTree = tree
        self.steps = []
        evaluation = self.evaluate(self.primaryTree)

        updatedSteps = []
        updatedTree = self.primaryTree
        for step in list(self.steps + [Evaulute._genStep(Node(evaluation, color=3))]):

            if not step['cTree']:
                # generate last step
                updatedSteps.append({
                    'left': '',
                    'right': '',
                    'result': '',
                    'operation': '',
                    'equation': '',
                    'description': '',
                    'isFunction': '',
                    'tree': toJson(step['primaryTree'])
                })
            else:
                updatedTree = Evaulute._buildWithoutBrach(updatedTree, step['cTree'].ident, step['val'])
                isFunction = VSAEMath._isValidFunction(step['right'])

                right = VSAEMath._numF(step['right']) if not isFunction else step['right']
                left = VSAEMath._numF(step['left'])
                value = VSAEMath._numF(step['val'])

                if isFunction:
                    description = f'Za naslednjo vrednost: {left} izvedemo funkcijo: {right}'
                    equation = f'{right}({left})' if right != 'fac' else f'{left}! = {value}'
                else:
                    description = f'Za naslednje vrednosti: {step["left"]}, {right} izvedemo naslednjo operacijo: {step["oper"]}'
                    equation = f'{left} {step["oper"]} {right} = {value}'

                updatedSteps.append({
                    'left': step['left'],
                    'right': step['right'],
                    'result': step['val'],
                    'operation': step['oper'],
                    'equation': equation,
                    'description': description,
                    'isFunction': isFunction,
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
    def _buildWithoutBrach(tree, id, newVal, last=False):
        if tree.color == 1:
            evaluation = Evaulute._evaluteAndGetOnlyResult(tree)
            newTree = Node(evaluation, left=None, right=None, ident=tree.ident, color=-1)
        else:
            if last:
                newTree = Node(tree.data, left=None, right=None, ident=id, color=2)
            elif tree.ident == id:
                newTree = Node(
                    tree.data,
                    left=Evaulute._buildWithoutBrach(tree.left, id, newVal, last=True),
                    right=Evaulute._buildWithoutBrach(tree.right, id, newVal, last=True),
                    ident=id,
                    color=1
                )
            else:
                newTree = Node(
                    tree.data,
                    left=Evaulute._buildWithoutBrach(tree.left, id, newVal) if tree.left else None,
                    right=Evaulute._buildWithoutBrach(tree.right, id, newVal) if tree.right else None,
                    ident=tree.ident
                )

        return newTree

    @staticmethod
    def _evaluteAndGetOnlyResult(tree):
        if tree.left and tree.right:
            left = Evaulute._evaluteAndGetOnlyResult(tree.left)
            right = Evaulute._evaluteAndGetOnlyResult(tree.right)
            operation = tree.data
            return VSAEMath._baseMathOperation(operation, left, right)
        else:
            return tree.data