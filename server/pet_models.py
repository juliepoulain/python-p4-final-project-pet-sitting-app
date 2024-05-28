
from config import *
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy


class Pet(db.Model, SerializerMixin):
    __tablename__ = 'pets'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    animal = db.Column(db.String)
    breed = db.Column(db.String)
    age = db.Column(db.Integer)
    temperament = db.Column(db.String)
    # owner_id = db.Column(db.Integer, db.ForeignKey('owners.id'))
    # owner = relationship('Owner', back_populates='pets')
    
    # def to_dict_with_pets(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name,
    #         'image': self.image,
    #         'breed':self.breed,
    #         'age': self.age,
    #         'temperament': self.temperament
            
    #     }

    def __repr__(self):
        return f'<Pet {self.id}, {self.name}, {self.image}, {self.animal}, {self.breed}, {self.age}, {self.temperament}, Owner: {self.owner_id}>'

