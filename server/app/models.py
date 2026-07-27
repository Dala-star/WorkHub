from datetime import datetime

from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Integer,
    String,
    Text,
)

from app.database import Base


class Contact(Base):

    __tablename__ = "contacts"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False
    )

    email = Column(
        String,
        nullable=False
    )

    service = Column(
        String,
        nullable=False
    )

    message = Column(
        Text,
        nullable=False
    )

    status = Column(
        String,
        default="New"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


class Service(Base):

    __tablename__ = "services"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    title = Column(
        String,
        nullable=False
    )

    description = Column(
        Text,
        nullable=False
    )

    icon = Column(
        String,
        nullable=False
    )

    active = Column(
        Boolean,
        default=True
    )


class Project(Base):

    __tablename__ = "projects"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    title = Column(
        String,
        nullable=False
    )

    description = Column(
        Text,
        nullable=False
    )

    tech = Column(
        String,
        nullable=False
    )

    image = Column(
        String,
        nullable=True
    )

    github = Column(
        String,
        nullable=True
    )

    live_demo = Column(
        String,
        nullable=True
    )

    featured = Column(
        Boolean,
        default=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )