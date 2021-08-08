from flask_restful import Api, Resource, reqparse, request
import os, json, random

class GetRecipeAPIHandler(Resource):
    def get(self):
        args = request.args

        user = args['user']
        name = args['name']

        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)

        for account in data['accounts']:
            if account['username'] == user:
                for recipe in account['recipes']:
                    if recipe['name'] == name:
                        return {
                            "imagesrc": recipe['picture'],
                            "recipesteps": ','.join(recipe['steps'])
                        }