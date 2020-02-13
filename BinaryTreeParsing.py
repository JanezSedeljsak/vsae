import operator
from modules.Node import Node
from modules.ToTreeConv import ToTreeConv as build_tree
from modules.TreeEvaluation import TreeEvaluation as evaluate

t = build_tree("( 5 + 4 * 2 / ( 1 - 5 ) ) ^ 2")
print(evaluate(t))
t.postorder()