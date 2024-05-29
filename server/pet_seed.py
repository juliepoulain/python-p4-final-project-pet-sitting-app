from app import app
from pet_models import Pet
from config import db


with app.app_context():
    Pet.query.delete()
    
    garfield = Pet(name="Garfield", image= "", animal="cat", age=3, temperament="lazy")
    rose = Pet(name="Rose", image= "", animal="cat", age=1, temperament="not friendly")
    buddy = Pet(name="Buddy", image= "", animal="dog", age=11, temperament="friendly")
    
    pets=[garfield, rose, buddy]
    
    db.session.add_all(pets)
    db.session.commit()
    

    