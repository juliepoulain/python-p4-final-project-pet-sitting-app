from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, Column, Integer, String, ForeignKey
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

db = SQLAlchemy(metadata=metadata)


class Pet(db.Model, SerializerMixin):
    __tablename__ = 'pets'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    image = Column(String)
    animal = Column(String)
    breed = Column(String)
    age = Column(Integer)
    temperament = Column(String)
    owner_id = Column(Integer, ForeignKey('owners.id'))
    owner = db.relationship('Owner', back_populates='pets', cascade ='all, delete-orphan')
    visits= association_proxy('owners', 'visit', creator = lambda visit_obj: Owner(visit = visit_obj))
    
    def __repr__(self):
        return f'<Pet {self.id}, {self.name}, {self.image}, {self.animal}, {self.breed}, {self.age}, {self.temperament}, Owner: {self.owner_id}>'