from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_database
from app.models import Contact
from app.schemas import ContactCreate, ContactResponse


router = APIRouter(
    prefix="/api/contact",
    tags=["Contact"]
)



# CREATE MESSAGE FROM WEBSITE

@router.post(
    "/",
    response_model=ContactResponse
)
def create_contact(

    contact: ContactCreate,

    db: Session = Depends(get_database)

):

    new_contact = Contact(

        name=contact.name,

        email=contact.email,

        service=contact.service,

        message=contact.message

    )


    db.add(new_contact)

    db.commit()

    db.refresh(new_contact)


    return new_contact





# GET ALL MESSAGES (ADMIN)

@router.get("/")
def get_contacts(

    db: Session = Depends(get_database)

):

    messages = db.query(Contact).order_by(
        Contact.created_at.desc()
    ).all()


    return messages





# UPDATE MESSAGE STATUS

@router.put("/{contact_id}")
def update_status(

    contact_id:int,

    data:dict,

    db:Session = Depends(get_database)

):

    contact = db.query(Contact).filter(
        Contact.id == contact_id
    ).first()



    if not contact:

        raise HTTPException(
            status_code=404,
            detail="Message not found"
        )



    contact.status = data["status"]


    db.commit()

    db.refresh(contact)



    return contact





# DELETE MESSAGE

@router.delete("/{contact_id}")
def delete_contact(

    contact_id:int,

    db:Session = Depends(get_database)

):

    contact = db.query(Contact).filter(
        Contact.id == contact_id
    ).first()



    if not contact:

        raise HTTPException(
            status_code=404,
            detail="Message not found"
        )



    db.delete(contact)

    db.commit()



    return {
        "message":"Deleted"
    }