from flask import redirect
from flask_restful import Api, Resource, reqparse
import json, os

class LoginAPIHandler(Resource):
    def get(self):
        return {
            "message": "Success"
        }
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('password', type=str)

        args = parser.parse_args()

        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)
        
        for account in data['accounts']:
            if args['username'] == account['username'] and args['password'] == account['password']:
                return {
                    'message': "Success"
                }
        
        return {
            'message': "Failure"
        }
        
        
