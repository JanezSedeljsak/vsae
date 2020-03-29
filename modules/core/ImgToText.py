import base64
import io

try:
    from PIL import Image
    import pytesseract
except ImportError:
    try:
        import Image
        import pytesseract
    except ImportError:
        print("cant import import modules")

pytesseract.pytesseract.tesseract_cmd = '/app/vendor/tesseract-ocr/bin/tesseract'
#pytesseract.pytesseract.tesseract_cmd = 'C:/Tesseract-OCR/tesseract.exe'

class ImgToText:
    equation = ""

    def __init__(self, img):
        imgString = img.split('base64')[-1].strip()
        convertedImage = Image.open(io.BytesIO(base64.b64decode(imgString)))
        self.equation = pytesseract.image_to_string(convertedImage)

    def _getEquation(self):
        return self.equation



