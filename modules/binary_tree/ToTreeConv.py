from modules.binary_tree.Node import Index as Node


def is_greater_precedence(op1, op2):
    pre = {'+': 0, '-': 0, '*': 1, '/': 1, '^': 2, 'f': 2}
    return pre[op1] >= pre[op2]


def associativity(op):
    ass = {'+': 0, '-': 0, '*': 0, '/': 0, '^': 1, 'f': 1}
    return ass[op]


def Index(exp):
    exp_list = exp.split()
    stack = []
    tree_stack = []
    for i in exp_list:
        if i not in ['+', '-', '*', '/', '^', '(', ')', 'f']:
            t = Node(str(i))
            tree_stack.append(t)

        elif i in ['+', '-', '*', '/', '^', 'f']:
            if not stack or stack[-1] == '(':
                stack.append(i)

            elif is_greater_precedence(i, stack[-1]) and associativity(i) == 1:
                stack.append(i)

            else:
                while stack and is_greater_precedence(stack[-1], i) and associativity(i) == 0:
                    popped_item = stack.pop()
                    t = Node(popped_item)
                    t1 = tree_stack.pop()
                    t2 = tree_stack.pop()
                    t.right = t1
                    t.left = t2
                    tree_stack.append(t)
                stack.append(i)

        elif i == '(':
            stack.append('(')

        elif i == ')':
            while stack[-1] != '(':
                popped_item = stack.pop()
                t = Node(popped_item)
                t1 = tree_stack.pop()
                t2 = tree_stack.pop()
                t.right = t1
                t.left = t2
                tree_stack.append(t)
            stack.pop()
    while stack:
        popped_item = stack.pop()
        t = Node(popped_item)
        t1 = tree_stack.pop()
        t2 = tree_stack.pop()
        t.right = t1
        t.left = t2
        tree_stack.append(t)

    t = tree_stack.pop()

    return t
