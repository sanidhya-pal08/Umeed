from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name: str
    email_address: EmailStr
    password: str

class UserLogin(BaseModel):
    email_address: EmailStr
    password: str

class MissingPersonCreate(BaseModel):
    name: str 
    age: int 
    description: str
    last_seen_date: str 
    last_seen_location: str 
    gender: str
    contact_email: EmailStr

class FoundPersonCreate(BaseModel):
    name: str | None= None
    age : int | None=None 
    gender: str | None= None
    description: str
    found_date: str 
    found_location: str 
    contact_email: EmailStr





