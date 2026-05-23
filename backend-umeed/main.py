from fastapi import FastAPI, Depends, HTTPException, Header
from  sqlalchemy.orm import Session
from db import get_db, Base, engine
import jwt 
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
from models import User, MissingPerson, FoundPerson
import os
from schemas import UserCreate, UserLogin, MissingPersonCreate , FoundPersonCreate

pwd_context=CryptContext(schemes=["bcrypt"],deprecated="auto")
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)



Base.metadata.create_all(bind=engine)

#function to return a token
def create_token(id):
    payl={"id":id}
    return jwt.encode(payl,"565656","HS256")

#function to get the current user 
def get_current_user(authorization: str = Header(...), db: Session = Depends(get_db)):
    x=authorization.split(" ")
    user_id=jwt.decode(x[1],"565656",algorithms=["HS256"])
    return user_id["id"]

#registering a user
@app.post("/users")
async def crete_user(item: UserCreate, db: Session=Depends(get_db)):
    hashed_password=pwd_context.hash(item.password)
    existing=db.query(User).filter(User.email_address==item.email_address).first()
    if existing:
        raise HTTPException(status_code=400,detail="user already exists")
    db_item=User(email_address=item.email_address, password=hashed_password)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return create_token(db_item.id)


#logging in a user
@app.post("/login")
async def login_user(item:UserLogin, db : Session = Depends(get_db)):
    db_user= db.query(User).filter(User.email_address == item.email_address).first()
    if not db_user or (not(pwd_context.verify(item.password, db_user.password))):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return create_token(db_user.id)


#






if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)