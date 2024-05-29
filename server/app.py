#!/usr/bin/env python3
from config import *
import os
from flask_restful import Resource
from flask import make_response, jsonify, request
from models import Owner, Pet, Sitter, Visit, db
from app import api
from flask_cors import CORS

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)
CORS(app)
api = Api(app)

@app.route("/")
def index():
    return "<h1>Petsitting</h1>"

class Pets(Resource):
    def get(self):
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(jsonify(pets), 200)
   
    def post(self):
        data = request.get_json()
        new_pet = Pet(
            name=data['name'],
            animal=data['animal'],
            breed=data['breed'],
            age=data['age'],
            temperament=data['temperament'],
            image=data['image']
        )
        db.session.add(new_pet)
        db.session.commit()
        return make_response(jsonify(new_pet.to_dict()), 201)
    
class PetsById(Resource):
    
    def get(self, id):
        pet = Pet.query.get(id)
        if pet is None:
            return make_response(jsonify(error='Pet not found'), 404)
        return make_response(jsonify(pet.to_dict()), 200)
    
    def patch(self, id):
        pet = Pet.query.get(id)
        if pet is None:
            return make_response(jsonify(error='Pet not found'), 404)
        for attr in request.get_json():
            setattr(pet, attr, request.get_json()[attr])
        db.session.commit()
        return make_response(jsonify(pet.to_dict()), 200)
    
    def delete(self, id):
        pet = Pet.query.get(id)
        if pet is None:
            return make_response(jsonify(error='Pet not found'), 404)
        db.session.delete(pet)
        db.session.commit()
        return make_response('', 204)
        
api.add_resource(Pets, '/pets')
api.add_resource(PetsById, '/pets/<int:id>')

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
    
class OwnersByPhone(Resource):
    def get(self, phone):
        owner = Owner.query.filter_by(phone=phone).first()
        if not owner:
            return make_response({"error": "Owner not found"}, 404)
        return make_response(jsonify(owner.to_dict()), 200)

api.add_resource(Owners, '/owners')
api.add_resource(OwnersById, '/owners/<int:id>')
api.add_resource(OwnersByPhone, '/owners/phone/<int:phone>')

class Sitters(Resource):
    def get(self):
        sitters = [sitter.to_dict() for sitter in Sitter.query.all()]
        return make_response(jsonify(sitters), 200)

class SitterById(Resource):
    def get(self, id):
        sitter = db.session.get(Sitter, id)
        if not sitter:
            return make_response({"error": "Sitter not found"}, 404)
        return make_response(jsonify(sitter.to_dict()), 200)

api.add_resource(Sitters, '/sitters')
api.add_resource(SitterById, '/sitters/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

