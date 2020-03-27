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
    def changeFacToFunc(eq):
        for i in range(len(eq)):
            if eq[i] == '!':
                eq = f'{eq[:i].strip()} f fac {eq[i+1:].strip()}'

        return eq
                

    @staticmethod
    def reformatEq(eq, key, middleIndex, function):
        closingIndex = EquationFormating.getClosingBracket(eq, middleIndex)
        prepend = eq[:key].strip()
        inbetween = eq[middleIndex:closingIndex+1].strip()
        append = eq[closingIndex+1:].strip()

        if len(prepend):
            # EG: -cos(5*4) or -5*(-cos(5*4)/2)
            if prepend[-1] == '-':
                prependList = list(prepend)
                prependList[-1] = '( 0 -'
                prepend = ''.join(prependList)

                return f'{prepend} ( {inbetween} f {function} ) ) {append}'

        return f'{prepend} ( {inbetween} f {function} ) {append}'

    @staticmethod
    def formatFunctionalEquation(eq, checkForFactorial=True):
        funcOperators = ['abs(', 'cos(', 'sin(', 'tan(', 'log(']
        for i in range(len(eq)):
            if eq[i:i+4] in funcOperators:
                eq = EquationFormating.reformatEq(eq, i, i+3, eq[i:i+3])
                continue    
            elif eq[i:i+3] == 'ln(':
                eq = EquationFormating.reformatEq(eq, i, i+2, 'ln')
        
        if checkForFactorial:
            if '!' in eq.strip():
                eq = EquationFormating.changeFacToFunc(eq.strip())

        return eq.strip()

    @staticmethod
    def defFormat(eq, checkForFunctions=True):
        fEq = ''
        mathOperators = ['+', '/', '*', '^']


        iterList = list(eq.strip())
        for key, el in enumerate(iterList):
            if el in mathOperators:
                fEq += f' {el} '
            elif el == '(':
                fEq += f'( '
            elif el == ')':
                fEq += f' )'
            elif el == '-':  
                if key == 0:
                    fEq = '-'
                # EG: 5*( - ( 7 + 4 ) / 2 ) * 9
                elif eq[key+1:].strip()[0] == '(' and fEq.strip()[-1] == '(':
                    fEq += '( 0 - '
                    closingIndex = EquationFormating.getClosingBracket(eq, key)
                    iterList[closingIndex] = ' ) )'
                else:
                    if fEq.strip()[-1] == '(':
                        fEq += '-'
                    else:
                        fEq += ' - '     
            elif el != ' ':
                fEq += el
        
        if checkForFunctions:
            if EquationFormating.anyInList(fEq, ['abs', 'cos', 'sin', 'tan', 'log', 'ln', '!']):
                fEq = EquationFormating.formatFunctionalEquation(fEq.strip())

        return fEq.strip()