from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_database
from app.models import Project


router = APIRouter(
    prefix="/api/projects",
    tags=["Projects"]
)



# GET ALL PROJECTS

@router.get("/")
def get_projects(
    db: Session = Depends(get_database)
):

    projects = db.query(Project).all()

    return projects



# CREATE PROJECT

@router.post("/")
def create_project(
    project: dict,
    db: Session = Depends(get_database)
):

    new_project = Project(

        title=project["title"],

        description=project["description"],

        tech=project["tech"],

        image=project.get("image"),

        github=project.get("github"),

        live_demo=project.get("live_demo"),

        featured=project.get(
            "featured",
            False
        )

    )


    db.add(new_project)

    db.commit()

    db.refresh(new_project)


    return new_project



# DELETE PROJECT

@router.delete("/{project_id}")
def delete_project(

    project_id:int,

    db:Session = Depends(get_database)

):

    project = db.query(Project).filter(
        Project.id == project_id
    ).first()



    if not project:

        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )



    db.delete(project)

    db.commit()



    return {
        "message":"Project deleted"
    }