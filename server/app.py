#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from models import db
from flask_migrate import Migrate
from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource
import os

# Local imports
from config import *

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

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

