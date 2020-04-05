from api.utils.vsae.vmath import MathOperations as VSAEMath
from api.utils.vsae.formater import EquationFormating as EFormat

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
        # reverse loop through to prepend everyting
        fEq = []
        skipCount = 0

        reversedEquation = (equation.split(" "))[::-1] if type(equation) != type([]) else equation[::-1]

        for key, el in enumerate(reversedEquation):
            if skipCount > 0:
                skipCount -= 1
                continue

            if not VSAEMath._isValidFunction(el):
                fEq = [el] + fEq
            else:
                if reversedEquation[key+3] == '(':
                    skipCount = 3
                    subEquation = f'{el}({reversedEquation[key+2]})' if el !=  'fac' else f'{reversedEquation[key+2]}!'
                else:
                    closingIndex = EFormat.getClosingBracket(reversedEquation, key, _searchBracket='(', _otherBracket=')', _appendIndex=1)
                    skipCount = abs(closingIndex - key)
                    innerFunctionEquation = self.transformFunction(reversedEquation[key+2:closingIndex][::-1])
                    subEquation = f'{el}({innerFunctionEquation})' if el !=  'fac' else f'{innerFunctionEquation}!'

                fEq = [subEquation] + fEq[:-1]



        return " ".join(fEq).strip()