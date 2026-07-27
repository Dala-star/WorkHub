from pydantic import BaseModel, EmailStr

from datetime import datetime


# =========================
# CONTACT SCHEMAS
# =========================

class ContactCreate(BaseModel):

    name: str

    email: EmailStr

    service: str

    message: str



class ContactResponse(ContactCreate):

    id: int

    status: str

    created_at: datetime


    class Config:
        from_attributes = True



# =========================
# SERVICE SCHEMAS
# =========================

class ServiceResponse(BaseModel):

    id: int

    title: str

    description: str

    icon: str

    active: bool


    class Config:
        from_attributes = True



# =========================
# PROJECT SCHEMAS
# =========================

class ProjectResponse(BaseModel):

    id: int

    title: str

    description: str

    tech: str

    image: str | None = None

    github: str | None = None

    live_demo: str | None = None

    featured: bool

    created_at: datetime


    class Config:
        from_attributes = True

class ProjectListResponse(BaseModel):

    projects: list[ProjectResponse]


class ServiceListResponse(BaseModel):

    services: list[ServiceResponse]      