from api.modules.binarytree.node import Index as Node

Index = lambda expTree : {
    'value': expTree.data,
    'left': Index(expTree.left) if expTree.left else None, 
    'right': Index(expTree.right) if expTree.right else None
}