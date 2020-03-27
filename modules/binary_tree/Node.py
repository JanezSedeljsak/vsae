class Index:
    ident = None

    def __init__(self, value, left=None, right=None):
        self.left = left
        self.data = value
        self.right = right

    def toString(self):
        expression = ""

    def postorder(self):

        if self.left:
            self.left.postorder()
        if self.right:
            self.right.postorder()