import operator
from modules.binary_tree.Node import Index as Node

Index = lambda expTree : {
    'value': expTree.data,
    'left': Index(expTree.left) if expTree.left else None, 
    'right': Index(expTree.right) if expTree.right else None
}