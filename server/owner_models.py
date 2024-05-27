from config import *
# from sitter_model import Sitter
# from pet_model import Pet
# from visit_model import Visit
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

class Owner(db.Model, SerializerMixin):
    __tablename__ = "owners"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    phone = db.Column(db.Integer)
    address = db.Column(db.String)

    # add relationships
    # visits = db.relationship("Visit", back_populates="visit")
    # pets = db.relationship("Pet", back_populates="pet")
    # sitters = association_proxy("sitters", "visit")

    # add serialization rules

    def __repr__(self):
        return f"<Owner: {self.name}>"