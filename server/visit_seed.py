#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from datetime import date, time, datetime

# Remote library imports
from faker import Faker

# Local imports
from app import app
from visit_model import Visit
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
    Visit.query.delete()

    print("Creating visits...")
    visitA = Visit(visit_notes="notesA", sitter_id=1, pet_id=1, owner_id=1, date=date(2024, 7, 2), check_in_time=time(14, 27))
    visitB = Visit(visit_notes="notesB", sitter_id=1, pet_id=1, owner_id=1, date=date(2024, 2, 1), check_in_time=time(12, 12))
    visitC = Visit(visit_notes="notesC", sitter_id=2, pet_id=1, owner_id=2, date=date(2024, 5, 27), check_in_time=time(15, 32))
    visits = [visitA, visitB, visitC]
    db.session.add_all(visits)
    db.session.commit()

    print("Seeding done!")


