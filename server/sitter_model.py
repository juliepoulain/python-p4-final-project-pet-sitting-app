from config import *
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.associationproxy import association_proxy



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

    
def __repr__(self):
        return f"<Sitter: {self.name}, Experience: {self.experience} years>"