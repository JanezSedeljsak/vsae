from api.utils.factory import create_app
from api.utils.config import DevelopmentConfig, ProductionConfig
from flask_cors import CORS
import os


app = create_app(ProductionConfig)
CORS(app)