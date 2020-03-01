class Index:
    def __init__(self, value):
        self.left = None
        self.data = value
        self.right = None

    def toString(self):
        expression = ""




    def postorder(self):

        if self.left:
            self.left.postorder()
        if self.right:
            self.right.postorder()