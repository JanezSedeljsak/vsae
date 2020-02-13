import operator
from modules.binary_tree.Node import Index as Node

def Index(expTree):
    opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv, '^':operator.pow}

    leftC = expTree.left
    rightC = expTree.right

    if leftC and rightC:
        fn = opers[expTree.data]
        return fn(Index(leftC), Index(rightC))
    else:
        return expTree.data