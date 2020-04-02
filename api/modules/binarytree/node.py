class Index:
    ident = None

    def __init__(self, value, left=None, right=None, ident=None, color=-1):
        self.left = left
        self.data = value
        self.right = right
        self.ident = ident
        self.color = color

    def toString(self):
        expression = ""

    def postorder(self):

        if self.left:
            self.left.postorder()
        if self.right:
            self.right.postorder()