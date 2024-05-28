from flask_restful import Resource
from flask import make_response, jsonify
from owner_models import Owner
from app import api

class Owners(Resource):
    def get(self):
        owners = [owner.to_dict() for owner in Owner.query.all()]
        return make_response(jsonify(owners),200)
    
api.add_resource(Owners, '/owners')