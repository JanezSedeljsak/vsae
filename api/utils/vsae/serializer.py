from api.utils.vsae.vmath import MathOperations as VSAEMath
from api.utils.vsae.formater import EquationFormating as EFormat

class SearilizeEquation:

    equation = ""

    def __init__(self, _tree):
        tree = _tree
        searilizedEquation = self.searilizeTree(tree)
        searilizedEquationStage2 = self.transformFunction(searilizedEquation)
        self.equation = self.removeUnnecessaryBrackets(searilizedEquationStage2)

    def _getEquation(self):
        return self.equation


    def searilizeTree(self, tree):
        if tree.left and tree.right:
            left = self.searilizeTree(tree.left)
            right = self.searilizeTree(tree.right)
            return f'( {left} {tree.data} {right} )'
        else:
            return VSAEMath._numF(tree.data) if not VSAEMath._isValidFunction(tree.data) else f'{tree.data}'


    def removeUnnecessaryBrackets(self, equation):

        dontAppend = set([])
        withoutUnnecessaryBrackets = []
        equationList = equation.strip().split(" ")

        for key, el in enumerate(equationList):
            if key in dontAppend:
                continue
            if el[-1] == '(':
                closingIndex = EFormat.getClosingBracket(equationList, key)
                if (equationList[key+1][-1] == '(' and equationList[closingIndex-1][-1] == ')'):
                    dontAppend |= set([key, closingIndex])
                    continue

            withoutUnnecessaryBrackets.append(el)

        return " ".join(withoutUnnecessaryBrackets)


    def transformFunction(self, equation):
        # reverse loop through to prepend everyting
        fEq = []

        reversedEquation = (equation.split(" "))[::-1] if type(equation) != type([]) else equation

        key = 0
        while key < len(reversedEquation):
            el = reversedEquation[key]

            if not VSAEMath._isValidFunction(el):
                fEq = [el] + fEq
            else:
                if reversedEquation[key+3] == '(':
                    subEquation = f'{el}({reversedEquation[key+2]})' if el !=  'fac' else f'{reversedEquation[key+2]}!'
                    key += 3
                else:
                    closingIndex = EFormat.getClosingBracket(reversedEquation, key, _searchBracket='(', _otherBracket=')', _appendIndex=1)
                    innerFunctionEquation = self.transformFunction(reversedEquation[key+2:closingIndex])
                    subEquation = f'{el}( {innerFunctionEquation.strip()} )' if el !=  'fac' else f'{innerFunctionEquation.strip()}!'
                    key += abs(closingIndex - key)

                fEq = ['('] + [subEquation] + fEq

            key += 1



        return " ".join(fEq).strip()
