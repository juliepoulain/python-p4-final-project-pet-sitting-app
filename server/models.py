from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import *

class Owner(db.Model, SerializerMixin):
    __tablename__ = "owners"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    phone = db.Column(db.Integer)
    address = db.Column(db.String)

    # add relationships test
    visits = db.relationship("Visit", back_populates="owner")
    pets = db.relationship("Pet", back_populates="owner")
    sitters = association_proxy("visits", "sitter")

    # add serialization rules
    serialize_rules = ('-visits.owner', '-pets.owner', '-sitters.owners')

    def __repr__(self):
        return f"<Owner: {self.name}>"
    
class Pet(db.Model, SerializerMixin):
    __tablename__ = 'pets'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    animal = db.Column(db.String)
    breed = db.Column(db.String)
    age = db.Column(db.Integer)
    temperament = db.Column(db.String)
    owner_id = db.Column(db.Integer, db.ForeignKey('owners.id'), nullable=False)
    
    owner = db.relationship('Owner', back_populates='pets')
    visits = db.relationship('Visit', back_populates='pet')

    def __repr__(self):
        return f'<Pet {self.id}, {self.name}, {self.image}, {self.animal}, {self.breed}, {self.age}, {self.temperament}, Owner: {self.owner_id}>'

    serialize_rules = ('-owner.pets', '-visits.pet', '-owner.visits')

class Sitter(db.Model, SerializerMixin):
    __tablename__ = "sitters"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    bio = db.Column(db.Text, nullable=True)
    experience = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String, nullable=True)
    address = db.Column(db.String, nullable=True)
    phone = db.Column(db.String, nullable=True)
    email = db.Column(db.String, nullable=True)

    visits = db.relationship('Visit', back_populates='sitter', cascade='all, delete-orphan')
    owners = association_proxy('visits', 'owner')

    serialize_rules = ('-visits.sitter', '-owners.sitters', '-visits.owner', '-visits.pet')

def repr(self):
        return f"<Sitter: {self.name}, Experience: {self.experience} years>"

class Visit(db.Model, SerializerMixin):
    __tablename__ = "visits"

    id = db.Column(db.Integer, primary_key=True)
    visit_notes = db.Column(db.String)
    sitter_id = db.Column(db.Integer, db.ForeignKey("sitters.id"), nullable=False)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("owners.id"), nullable=False)
    date = db.Column(db.Date)
    check_in_time = db.Column(db.Time)

    # add relationships
    owner = db.relationship("Owner", back_populates="visits")
    sitter = db.relationship("Sitter", back_populates="visits")
    pet = db.relationship("Pet", back_populates="visits")

    # add serialization rules
    serialize_rules = ('-owner.visits', '-sitter.visits', '-pet.visits', '-owner.pets', '-sitter.owners')

    def __repr__(self):
        return f"<Visit: {self.date}>"