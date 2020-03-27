import operator
from modules.binary_tree.Node import Index as Node
from modules.core.VsaeMath import MathOperations as VSAEMath
from modules.binary_tree.TreeToJson import Index as toJson

class Evaulute:

    primaryTree = None
    steps = []
    base = {}

    def __init__(self, tree, initialEq, buildForDrawing=True):
        self.primaryTree = tree
        self.steps = []
        self.base = {
            'equation': initialEq,
            'result': self.evaluate(self.primaryTree),
            'steps': self.steps,
        }

        if buildForDrawing:
            self.base['jsonTree']: toJson(tree)

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
            self.addStep({
                'left': left,
                'right': right,
                'oper': operation,
                'val': val,
                'primaryTree': self.primaryTree,
                'cTree': tree
            })
            return val

        else:
            return tree.data