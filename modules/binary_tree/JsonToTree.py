import operator
from modules.binary_tree.Node import Index as Node

Index = lambda expTree : Node(
    expTree['value'],
    Index(expTree['left']) if expTree['left'] else None,
    Index(expTree['right']) if expTree['right'] else None
)