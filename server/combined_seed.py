from app import app
from config import db
from random import randint, choice as rc
from datetime import date, time, datetime
from models import Owner, Pet, Sitter, Visit

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")

with app.app_context():

    print("Deleting owners...")
    Owner.query.delete()
    print("Creating owners...")
    julie = Owner(name="Julie", address='julieaddress', email="julieemail@gmail.com", phone=9785510848)
    billy = Owner(name="Billy", address="billyaddress", email="billyemail", phone=1111111112)
    bia = Owner(name="Bia", address="biaaddress2", email="biaemail", phone=1111111113)
    owners = [julie, billy, bia]
    db.session.add_all(owners)
    db.session.commit()

    print("Deleting pets...")
    Pet.query.delete()
    print("Adding pets...")
    garfield = Pet(name="Garfield", image= "", animal="cat", age=3, temperament="lazy", owner_id=julie.id)
    rose = Pet(name="Rose", image= "", animal="cat", age=1, temperament="not friendly", owner_id=billy.id)
    buddy = Pet(name="Buddy", image= "", animal="dog", age=11, temperament="friendly", owner_id=billy.id)
    pets=[garfield, rose, buddy]
    db.session.add_all(pets)
    db.session.commit()

    print("Deleting sitters...")
    Sitter.query.delete()
    print("Creating sitters...")
    sitters = [
        Sitter(
            name="Jason Vorhees",
            bio="Great with watching your little ones at a lake",
            experience=7,
            image="https://images.nightcafe.studio/jobs/6sLDmT6whBds1MnmQf6y/6sLDmT6whBds1MnmQf6y--1--5hp52_2x.jpg?tr=w-1200,c-at_max",
            address="12 Crystal Lake, Wantabe, NJ 07050",
            phone=1111111111,
            email="jvorheesluvsyou1@madeup.com"
        ),
        Sitter(
            name="Freddy Krueger",
            bio="Ensures your pets have the best dreams",
            experience=10,
            image="https://static1.srcdn.com/wordpress/wp-content/uploads/2016/10/Nightmare-on-Elm-Street-6.jpg",
            address="1428 Elm Street, Springwood, OH 45459",
            phone=1111111111,
            email="fkrueger@nightmares.com"
        ),
        Sitter(
            name="Michael Myers",
            bio="Silent but always keeps an eye on your pets",
            experience=8,
            image="https://coleandmarmalade.com/wp-content/uploads/2022/03/Michael-Meowers-1.jpg",
            address="45 Lampkin Lane, Haddonfield, IL 60120",
            phone=1111111111,
            email="mmyers@halloween.com"
        ),
        Sitter(
            name="Chucky Ray",
            bio="Great with pets, especially if they like to play",
            experience=5,
            image="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/Brad-Dourif-as-Chucky-with-Binx-the-Cat-in-Chucky-Episode-1.jpg",
            address="123 Good Guys St, Hackensack, NJ 07601",
            phone=1111111111,
            email="cray@goodguys.com"
        ),
        Sitter(
            name="Norman Bates",
            bio="Takes care of your pets like they were his own",
            experience=6,
            image="https://m.media-amazon.com/images/M/MV5BMWZiYmM3MzItYzFiOC00N2VmLWEwOWQtZTYzYjFmNjZlMWRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzAzMDEzNTI@._V1_.jpg",
            address="12 Old Highway, Fairvale, CA 93922",
            phone=1111111111,
            email="nbates@batesmotel.com"
        ),
        Sitter(
            name="Pennywise Clown",
            bio="Your pets will float with joy under my care",
            experience=9,
            image="https://photos.costume-works.com/full/pennywise_and_his_dog-31298-1.jpg",
            address="29 Neibolt Street, Derry, ME 04401",
            phone=1111111111,
            email="pennywise@it.com"
        )
    ]
    for sitter in sitters:
        db.session.add(sitter)
    db.session.commit()

    print("Deleting visits...")
    Visit.query.delete()
    print("Creating visits...")
    visitA = Visit(visit_notes="notesA", sitter_id=sitters[0].id, pet_id=garfield.id, owner_id=julie.id, date=date(2024, 7, 2), check_in_time=time(14, 27))
    visitB = Visit(visit_notes="notesB", sitter_id=sitters[0].id, pet_id=garfield.id, owner_id=julie.id, date=date(2024, 2, 1), check_in_time=time(12, 12))
    visitC = Visit(visit_notes="notesC", sitter_id=sitters[1].id, pet_id=rose.id, owner_id=billy.id, date=date(2024, 5, 27), check_in_time=time(15, 32))
    visitD = Visit(visit_notes="notesD", sitter_id=sitters[2].id, pet_id=buddy.id, owner_id=billy.id, date=date(2024, 6, 15), check_in_time=time(10, 15))
    visitE = Visit(visit_notes="notesE", sitter_id=sitters[3].id, pet_id=rose.id, owner_id=billy.id, date=date(2024, 8, 10), check_in_time=time(9, 45))
    visitF = Visit(visit_notes="notesF", sitter_id=sitters[4].id, pet_id=buddy.id, owner_id=billy.id, date=date(2024, 9, 20), check_in_time=time(11, 30))
    visitG = Visit(visit_notes="notesG", sitter_id=sitters[5].id, pet_id=garfield.id, owner_id=julie.id, date=date(2024, 10, 5), check_in_time=time(14, 0))
    visits = [visitA, visitB, visitC, visitD, visitE, visitF, visitG]
    db.session.add_all(visits)
    db.session.commit()

    print("Seeding done!")

    

    
    