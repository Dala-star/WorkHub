from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_database
from app.models import Service


router = APIRouter(
    prefix="/api/services",
    tags=["Services"]
)



@router.get("/")
def get_services(
    db: Session = Depends(get_database)
):

    return db.query(Service).all()



@router.post("/")
def create_service(
    service: dict,
    db: Session = Depends(get_database)
):

    new_service = Service(
        title=service["title"],
        description=service["description"],
        icon=service["icon"]
    )


    db.add(new_service)
    db.commit()
    db.refresh(new_service)

    return new_service



@router.delete("/{service_id}")
def delete_service(
    service_id:int,
    db:Session = Depends(get_database)
):

    service = db.query(Service).filter(
        Service.id == service_id
    ).first()


    if not service:
        raise HTTPException(
            status_code=404,
            detail="Service not found"
        )


    db.delete(service)
    db.commit()


    return {
        "message":"Service deleted"
    }