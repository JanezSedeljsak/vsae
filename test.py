
# import modules for binary tree parsing
from modules.binary_tree.Node import Index as Node
from modules.binary_tree.ToTreeConv import Index as build_tree
from modules.binary_tree.TreeEvaluation import Index as binaryTreeEvaluation

# import modules for shunting yard algorithm
from modules.shunting_yard_algo.Algorithm import Index as shuntingYardAlgorithmEvaluation 


def main():
    expression = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3'

    print("----------------------------------------------------------------------\n Shunting Yard Algorithm: {0}   \n----------------------------------------------------------------------"
        .format(shuntingYardAlgorithmEvaluation(expression)))
    print("----------------------------------------------------------------------\n Binary Tree Parsing: {0} \n----------------------------------------------------------------------"
        .format(binaryTreeEvaluation(build_tree(expression))))

main() and __name__ == '__main__'
