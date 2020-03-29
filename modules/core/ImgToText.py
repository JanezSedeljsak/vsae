#from PIL import Image
import base64
import io

class ImgToText:

    def __init__(self, img):
        self.img = img
        #imgString = img.splt('base64')[-1].strip()
        #convertedImage = Image.open(io.BytesIO(base64.b64decode(imgString)))

        #convertedImage.save('neki.png')

