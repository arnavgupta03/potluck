from flask_restful import Api, Resource, reqparse

class LandingAPIHandler(Resource):
    def get(self):
        return {
            "message": "Hello World"
        }