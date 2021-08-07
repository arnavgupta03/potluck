from flask import redirect
from flask_restful import Api, Resource, reqparse
import json, os

class RegisterAPIHandler(Resource):
    def get(self):
        return {
            "message": "Success"
        }
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('password', type=str)
        parser.add_argument('name', type=str)
        parser.add_argument('bio', type=str)

        args = parser.parse_args()

        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)

        accountsChecked = 0
        
        for account in data['accounts']:
            if args['username'] != account['username']:
                accountsChecked += 1
        
        if accountsChecked == len(data['accounts']):
            data['accounts'].append({
                'username': args['username'],
                'password': args['password'],
                'name': args['name'],
                'bio': args['bio'],
                'profilepic': "",
                'recipes': []
            })
            with open(os.path.join(here, "data.json"), 'w') as file:
                json.dump(data,file)
            return {
                "message": "Success"
            }
        else:
            return {
                "message": "User already exists."
            }
