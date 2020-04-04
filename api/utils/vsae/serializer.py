from api.utils.vsae.vmath import MathOperations as VSAEMath

class SearilizeEquation:

    equation = ""

    def __init__(self, _tree):
        tree = _tree
        searilizedEquation = self.searilizeTree(tree)
        self.equation = self.transformFunction(searilizedEquation)


    def _getEquation(self):
        return self.equation


    def searilizeTree(self, tree):
        if tree.left and tree.right:
            left = self.searilizeTree(tree.left)
            right = self.searilizeTree(tree.right)
            return f'( {left} {tree.data} {right} )'
        else:
            return VSAEMath._numF(tree.data) if not VSAEMath._isValidFunction(tree.data) else f'{tree.data}'


    def transformFunction(self, equation):
        # TODO @chnage ( 100 f log ) => log(100)
        return equation