from config import *
from sqlalchemy_serializer import SerializerMixin


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