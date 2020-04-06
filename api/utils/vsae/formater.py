import json

class EquationFormating:

    @staticmethod
    def anyInList(arr, items):
        for item in items:
            if item in arr:
                return True

        return False

    @staticmethod
    def getClosingBracket(eq, index, _searchBracket=')', _otherBracket='(', _appendIndex = 0):

        startBracketCount = 0
        endBracketCount = 0
        
        for key, bracket in enumerate(eq[index:]):
            if bracket == _otherBracket:
                startBracketCount += 1
            elif bracket == _searchBracket:
                endBracketCount += 1

            if (startBracketCount + _appendIndex) == endBracketCount and startBracketCount != 0:
                return key + index

        return -1

    @staticmethod
    def changeFacToFunc(eq):
        counter = 0
        while (counter < len(eq)):
            if eq[counter] == '!':
                eq = f'{eq[:counter].strip()} f fac {eq[counter+1:].strip()}'
            counter += 1

        return eq.strip()
                

    @staticmethod
    def reformatEq(eq, key, middleIndex, function):
        closingIndex = EquationFormating.getClosingBracket(eq, middleIndex)
        prepend = eq[:key].strip()
        inbetween = eq[middleIndex:closingIndex+1].strip()
        append = eq[closingIndex+1:].strip()

        if len(prepend):
            closingBrackets = ') )'
            if prepend[-1] == '-':
                prependList = list(prepend)
                if len(prepend) == 1:
                    prependList[-1] = '( 0 -'
                elif len(prependList) > 2:
                    if prependList[-3] == '(':
                        prependList[-1] = '( 0 -'
                    else:
                        closingBrackets = ')'
                else:
                    prependList.append(' ( 0 -')
                prepend = ''.join(prependList)

                return f'{prepend} ( {inbetween} f {function} {closingBrackets} {append}'

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

            elif el == ',':
                fEq += '.'

            elif el != ' ':
                fEq += el

        firstStageFormat = fEq

        if checkForFunctions:
            if EquationFormating.anyInList(fEq, ['abs', 'cos', 'sin', 'tan', 'log', 'ln', '!']):
                fEq = EquationFormating.formatFunctionalEquation(fEq.strip())

        return fEq.strip(), firstStageFormat