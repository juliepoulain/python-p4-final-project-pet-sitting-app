#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource
from pet_models import db, Pet
# Local imports
from config import app, db, api
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'
class Pets(Resource):
    def get(self):
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(jsonify(pets),200)
    
api.add_resource(Pets, '/pets')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

