#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from owner_models import Owner
from config import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!


with app.app_context():

    # This will delete any existing rows
    # so you can run the seed file multiple times without having duplicate entries in your database
    print("Deleting data...")
    Owner.query.delete()

    print("Creating owners...")
    julie = Owner(name="Julie", address='julieaddress', email="julieemail", phone=1111111111)
    billy = Owner(name="Billy", address="billyaddress", email="billyemail", phone=1111111112)
    bia = Owner(name="Bia", address="biaaddress2", email="biaemail", phone=1111111113)
    owners = [julie, billy, bia]
    db.session.add_all(owners)
    db.session.commit()

    print("Seeding done!")


