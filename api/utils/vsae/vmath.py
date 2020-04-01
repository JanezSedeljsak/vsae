from math import *
from decimal import Decimal

class MathOperations:

    @staticmethod
    def _isValidFunction(name):
        return name in ['cos','sin','tan','log','ln','abs','fac']

    @staticmethod
    def _baseMathOperation(ident, n1, n2):
        return {
            '+': lambda num1, num2: float(num1) + float(num2),
            '-': lambda num1, num2: float(num1) - float(num2),
            '/': lambda num1, num2: float(num1) / float(num2),
            '*': lambda num1, num2: float(num1) * float(num2),
            '^': lambda num1, num2: float(num1) ** float(num2),
            'f': lambda num1, num2: MathOperations._funcMathOperation(float(n1),n2) if MathOperations._isValidFunction((n2)) else num1,
        }[ident](n1,n2)

    @staticmethod
    def _funcMathOperation(num, funcName):
        return {
            'cos': lambda num: cos(MathOperations._funcMathOperation(num)),
            'sin': lambda num: sin(MathOperations._funcMathOperation(num)),
            'tan': lambda num: tan(MathOperations._funcMathOperation(num)),
            'log': lambda num: log10(num),
            'ln': lambda num: log1p(num),
            'abs': lambda num: fabs(num),
            'fac': lambda num: factorial(num)
        }[funcName](num)

    @staticmethod
    def _convertDegToRadians(deg):
        return deg * (pi / 180)

    @staticmethod
    def _numF(num):
        if not num:
            return 0
        else:
            return int(num) if Decimal(num) % 1 == 0 else round(Decimal(num), 2)

