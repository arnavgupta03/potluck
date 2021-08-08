from flask_restful import Api, Resource, reqparse, request
import os, json

class GetProfileAPIHandler(Resource):
    def get(self):
        args = request.args

        user = args['user']

        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)

        for account in data['accounts']:
            if account['username'] == user:
                return {
                    "profilename": account['name'],
                    "bio": account['bio'],
                    "recipes": account['recipes']
                }