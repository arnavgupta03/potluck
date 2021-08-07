from flask_restful import Api, Resource, reqparse

class FeedAPIHandler(Resource):
    def get(self):
        return {
            "message": "Hello World"
        }