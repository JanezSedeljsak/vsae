
# import modules for binary tree parsing
from modules.binary_tree.ToTreeConv import Index as build_tree
from modules.binary_tree.TreeEvaluation import Index as binaryTreeEvaluation

# import modules for shunting yard algorithm
from modules.shunting_yard_algo.Algorithm import Index as shuntingYardAlgorithmEvaluation 


def main():
    expression = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3'

    print(
        "{1}\n\tShunting Yard Algorithm: {0}\n{1}"
        .format(shuntingYardAlgorithmEvaluation(expression), ('-' * 100))
    )

    print(
        "{1}\n\tBinary Tree Parsing: {0}\n{1}"
        .format(binaryTreeEvaluation(build_tree(expression)), ('-' * 100))
    )

main() and __name__ == '__main__'
