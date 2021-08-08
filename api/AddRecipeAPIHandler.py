from flask import redirect
from flask_restful import Api, Resource, reqparse
import json, os

class AddRecipeAPIHandler(Resource):
    def get(self):
        return {
            "message": "Success"
        }
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('recipename', type=str)
        parser.add_argument('recipesteps', type=str)
        parser.add_argument('recipeimage', type=str)
        parser.add_argument('username', type=str)

        args = parser.parse_args()

        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)

        for i, account in enumerate(data['accounts']):
            if account['username'] == args['username']:
                recipesChecked = 0
                for recipe in account['recipes']:
                    if recipe['name'] != args['recipename']:
                        recipesChecked += 1
                if recipesChecked == len(account['recipes']):
                    data['accounts'][i]['recipes'].append({
                        'name': args['recipename'],
                        'picture': args['recipeimage'],
                        'steps': args['recipesteps'].split(',')
                    })
                    return {
                        'message': "Success"
                    }
                else:
                    return {
                        'message': 'Recipe name already exists'
                    }

        return {
            'message': "Something failed."
        }