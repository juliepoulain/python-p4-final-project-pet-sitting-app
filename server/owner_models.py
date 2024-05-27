from config import *
from sqlalchemy_serializer import SerializerMixin


class Owner(db.Model, SerializerMixin):
    __tablename__ = "owners"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    address = db.Column(db.String)

    # add relationship


    # add serialization rules

    def __repr__(self):
        return f"<Owner: {self.name}>"