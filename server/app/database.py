from pathlib import Path

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


# Database location
DATABASE_DIR = Path("database")

DATABASE_DIR.mkdir(
    exist_ok=True
)

DATABASE_URL = "sqlite:///./database/workhub.db"


# Database engine
engine = create_engine(
    DATABASE_URL,
    connect_args={
        "check_same_thread": False
    }
)


# Database sessions
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


# Base class for models
Base = declarative_base()


# Dependency for routes
def get_database():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()