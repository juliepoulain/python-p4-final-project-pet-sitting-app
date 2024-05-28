#!/usr/bin/env python3
from config import *
import os
from models import db
from flask_restful import Resource
from flask import make_response, jsonify
from owner_models import Owner
from app import api
from pet_models import Pet


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route("/")
def index():
    return "<h1>Code challenge</h1>"

class Pets(Resource):
    def get(self):
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(jsonify(pets),200)
    
api.add_resource(Pets, '/pets')

class Owners(Resource):
    def get(self):
        owners = [owner.to_dict() for owner in Owner.query.all()]
        return make_response(jsonify(owners),200)

class OwnersById(Resource):
    def get(self, id):
        owner = db.session.get(Owner, id)
        if not owner:
            return make_response({"error": "Owner not found"}, 404)
        return make_response(jsonify(owner.to_dict()), 200)

api.add_resource(Owners, '/owners')
api.add_resource(OwnersById, '/owners/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

