from flask_restful import Api, Resource, reqparse, request
import os, json

class BookmarksAPIHandler(Resource):
    def get(self):
        args = request.args

        user = args['user']

        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)

        for account in data['accounts']:
            if account['username'] == user:
                return {
                    "bookmarks": account['bookmarks']
                }

        return {
            "message": "Hello World"
        }
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('recipename', type=str)
        parser.add_argument('recipeimage', type=str)
        parser.add_argument('recipeuser', type=str)

        args = parser.parse_args()

        here = os.path.dirname(os.path.abspath(__file__))

        with open(os.path.join(here, "data.json")) as file:
            data = json.load(file)
        
        for i, account in enumerate(data['accounts']):
            if account['username'] == args['username']:
                data['accounts'][i]['bookmarks'].append({
                    'recipename': args['recipename'],
                    'recipeimage': args['recipeimage'],
                    'recipeuser': args['recipeuser']
                })
                with open(os.path.join(here, "data.json"), 'w') as file:
                    json.dump(data,file)
                return {
                    "message": "Success"
                }