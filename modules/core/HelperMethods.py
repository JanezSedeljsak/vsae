import json

class ServerMethods:
    @staticmethod
    def dispatchJSON(obj):
        return json.dumps(obj, separators=(',', ':'))


class EquationFormating:

    @staticmethod
    def anyInList(arr, items):
        for item in items:
            if item in arr:
                return True

        return False

    @staticmethod
    def getClosingBracket(eq, index):

        startBracketCount = 0
        endBracketCount = 0
        
        for key, bracket in enumerate(eq[index:]):
            if bracket == '(':
                startBracketCount += 1
            elif bracket == ')':
                endBracketCount += 1

            if startBracketCount == endBracketCount and startBracketCount != 0:
                return key + index

        return -1

    @staticmethod
    def formatFunctionalEquation(eq):
        funcOperators = ['abs(', 'cos(', 'sin(', 'tan(', 'log(']
        for i in range(len(eq)-6):

            closingIndex = -1
            middleIndex = -1
            function = ''

            if eq[i:i+4] in funcOperators:
                middleIndex = i + 3
                closingIndex = EquationFormating.getClosingBracket(eq, middleIndex)
                function = eq[i:i+3]
                
            elif eq[i:i+3] == 'ln(':
                middleIndex = i + 2
                closingIndex = EquationFormating.getClosingBracket(eq, middleIndex)
                function = 'ln'
                
            if closingIndex != -1:
                prepend = eq[:i].strip()
                inbetween = eq[middleIndex:closingIndex+1].strip()
                append = eq[closingIndex+1:].strip()

                eq = f'{prepend} {inbetween} f {function} {append}'
        
        return eq.strip()

    @staticmethod
    def defFormat(eq, checkForFunctions=True):
        fEq = ''
        mathOperators = ['+', '/', '*', '^']

        for el in eq:
            if el in mathOperators:
                fEq += f' {el} '
            elif el == '(':
                fEq += f'( '               
            elif el == ')':
                fEq += f' )'                
            elif el == '-':               
                if fEq.strip()[-1] == '(':
                    fEq += '-'                  
                else:
                    fEq += ' - '            
            elif el != ' ':
                fEq += el
        
        if checkForFunctions:
            if EquationFormating.anyInList(fEq, ['abs', 'cos', 'sin', 'tan', 'log', 'ln']):
                fEq = EquationFormating.formatFunctionalEquation(fEq.strip())

        return fEq.strip()