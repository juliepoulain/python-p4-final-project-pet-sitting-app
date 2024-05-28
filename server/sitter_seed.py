#!/usr/bin/env python3

# Standard library imports
from random import randint

# Remote library imports
from faker import Faker

# Local imports
from app import app, db
from sitter_model import Sitter

if __name__ == '__main__':
    fake = Faker()

    with app.app_context():
        print("Starting seed...")
        
        # Drop all existing data
        db.drop(Sitter)
        db.create_all()

        # Create Sitters
        sitters = [
            Sitter(
                name="Jason Vorhees",
                bio="Great with watching your little ones at a lake",
                experience=7,
                image="https://stockphoto.com/jvorhees.jpg",
                address="12 Crystal Lake, Wantabe, NJ 07050",
                phone="(717)-555-7878",
                email="jvorheesluvsyou1@madeup.com"
            ),
            Sitter(
                name="Freddy Krueger",
                bio="Ensures your pets have the best dreams",
                experience=10,
                image="https://stockphoto.com/fkrueger.jpg",
                address="1428 Elm Street, Springwood, OH 45459",
                phone="(513)-555-1234",
                email="fkrueger@nightmares.com"
            ),
            Sitter(
                name="Michael Myers",
                bio="Silent but always keeps an eye on your pets",
                experience=8,
                image="https://stockphoto.com/mmyers.jpg",
                address="45 Lampkin Lane, Haddonfield, IL 60120",
                phone="(312)-555-7890",
                email="mmyers@halloween.com"
            ),
            Sitter(
                name="Chucky Ray",
                bio="Great with pets, especially if they like to play",
                experience=5,
                image="https://stockphoto.com/cray.jpg",
                address="123 Good Guys St, Hackensack, NJ 07601",
                phone="(201)-555-5678",
                email="cray@goodguys.com"
            ),
            Sitter(
                name="Norman Bates",
                bio="Takes care of your pets like they were his own",
                experience=6,
                image="https://stockphoto.com/nbates.jpg",
                address="12 Old Highway, Fairvale, CA 93922",
                phone="(408)-555-1122",
                email="nbates@batesmotel.com"
            ),
            Sitter(
                name="Pennywise Clown",
                bio="Your pets will float with joy under my care",
                experience=9,
                image="https://stockphoto.com/pennywise.jpg",
                address="29 Neibolt Street, Derry, ME 04401",
                phone="(207)-555-8787",
                email="pennywise@it.com"
            )
        ]

        for sitter in sitters:
            db.session.add(sitter)

        db.session.commit()
        print("Seed completed!")