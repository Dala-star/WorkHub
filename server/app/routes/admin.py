from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_database
from app.models import Service, Project, Contact


router = APIRouter(
    prefix="/api/admin",
    tags=["Admin"]
)


# =========================
# SERVICES
# =========================


@router.post("/services")
def create_service(
    title: str,
    description: str,
    db: Session = Depends(get_database)
):

    service = Service(
        title=title,
        description=description
    )

    db.add(service)
    db.commit()
    db.refresh(service)

    return service



@router.get("/services")
def get_admin_services(
    db: Session = Depends(get_database)
):

    services = db.query(Service).all()

    return {
        "services": services
    }



@router.delete("/services/{service_id}")
def delete_service(
    service_id: int,
    db: Session = Depends(get_database)
):

    service = (
        db.query(Service)
        .filter(Service.id == service_id)
        .first()
    )


    if not service:
        raise HTTPException(
            status_code=404,
            detail="Service not found"
        )


    db.delete(service)
    db.commit()


    return {
        "message": "Service deleted"
    }



# =========================
# PROJECTS
# =========================


@router.post("/projects")
def create_project(
    title: str,
    tech: str,
    description: str,
    db: Session = Depends(get_database)
):

    project = Project(
        title=title,
        tech=tech,
        description=description
    )


    db.add(project)
    db.commit()
    db.refresh(project)


    return project



@router.get("/projects")
def get_admin_projects(
    db: Session = Depends(get_database)
):

    projects = db.query(Project).all()


    return {
        "projects": projects
    }



@router.delete("/projects/{project_id}")
def delete_project(
    project_id: int,
    db: Session = Depends(get_database)
):

    project = (
        db.query(Project)
        .filter(Project.id == project_id)
        .first()
    )


    if not project:

        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )


    db.delete(project)
    db.commit()


    return {
        "message": "Project deleted"
    }



# =========================
# CONTACT MESSAGES
# =========================


@router.get("/messages")
def get_messages(
    db: Session = Depends(get_database)
):

    messages = (
        db.query(Contact)
        .order_by(Contact.created_at.desc())
        .all()
    )


    return {
        "messages": messages
    }



@router.delete("/messages/{message_id}")
def delete_message(
    message_id: int,
    db: Session = Depends(get_database)
):

    message = (
        db.query(Contact)
        .filter(Contact.id == message_id)
        .first()
    )


    if not message:

        raise HTTPException(
            status_code=404,
            detail="Message not found"
        )


    db.delete(message)
    db.commit()


    return {
        "message": "Message deleted"
    }