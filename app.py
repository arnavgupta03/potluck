from flask import Flask, send_from_directory
from flask_restful import Api #, Resource, reqparse
from flask_cors import CORS
from api.LandingAPIHandler import LandingAPIHandler
from api.RegisterAPIHandler import RegisterAPIHandler
from api.LoginAPIHandler import LoginAPIHandler

app = Flask(__name__, static_url_path="", static_folder="frontend/build")
CORS(app)
api = Api(app)

@app.route("/")
def serve():
    return send_from_directory(app.static_folder, 'index.html')

api.add_resource(LandingAPIHandler, '/landing')
api.add_resource(RegisterAPIHandler, '/registerUser')
api.add_resource(LoginAPIHandler, '/registerUser')