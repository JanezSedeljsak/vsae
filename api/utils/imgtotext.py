import base64
import io
import os
import pytesseract

try:
    from PIL import Image
except ImportError:
    try:
        import Image
    except ImportError:
        print("cant import import Pillow")


if os.environ.get('WORK_ENV') != 'PROD':
    ##pytesseract.pytesseract.tesseract_cmd = 'C:/Tesseract-OCR/tesseract.exe'

class ImgToText:
    equation = ""

    def __init__(self, img):
        imgString = img.split('base64')[-1].strip()
        convertedImage = Image.open(io.BytesIO(base64.b64decode(imgString)))
        self.equation = pytesseract.image_to_string(convertedImage)

    def _getEquation(self):
        return self.equation



