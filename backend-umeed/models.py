from db import Base 
from sqlalchemy import Column, Integer, String, ForeignKey



class User(Base):
    __tablename__="users"
    id=Column(Integer, primary_key=True, index=True)
    first_name=Column(String, nullable=False)
    last_name=Column(String, nullable=False)
    email_address=Column(String, unique=True, index=True)
    password=Column(String)

class MissingPerson(Base):
    __tablename__="missing_persons"
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, nullable=False)
    age=Column(Integer, nullable=False)
    gender=Column(String, nullable=False)
    last_seen_location=Column(String, nullable=False)
    last_seen_date=Column(String, nullable=False)
    image_path = Column(String, nullable=False)
    description = Column(String, nullable=True)
    status = Column(String, default="active")
    contact_email = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

class FoundPerson(Base):
    __tablename__="found_persons"
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String , nullable=True)
    age=Column(Integer, nullable=True)
    gender=Column(String, nullable=True)
    found_location=Column(String, nullable=False)
    found_date=Column(String, nullable=False)
    image_path = Column(String, nullable=True)
    description = Column(String, nullable=True)
    status = Column(String, default="unidentified")
    contact_email = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
