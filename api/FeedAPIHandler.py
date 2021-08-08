from flask_restful import Api, Resource, reqparse
import os, json, random

class FeedAPIHandler(Resource):
    def get(self):
        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)

        for account in data['accounts']:
            print(account)

        return {
            "message": "Hello World"
        }
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('postsDone', type=str)

        args = parser.parse_args()

        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)

        lookedAtPosts = args['postsDone'].split(',')

        for user in data['accounts']:
            if user['username'] != args['username']:
                currentUser = user['username']
                for recipe in user['recipes']:
                    if not((user['username'] + '_' + recipe['name']) in lookedAtPosts):
                        currentRecipe = recipe
                        return {
                            "user": currentUser,
                            "recipename": currentRecipe['name'],
                            "recipeimage": currentRecipe['picture']
                        }