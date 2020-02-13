import operator
from modules.Node import Node

def TreeEvaluation(expTree):
    opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv, '^':operator.pow}

    leftC = expTree.left
    rightC = expTree.right

    if leftC and rightC:
        fn = opers[expTree.data]
        return fn(TreeEvaluation(leftC), TreeEvaluation(rightC))
    else:
        return expTree.data