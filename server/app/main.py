from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import contacts
from app.routes import projects
from app.routes import services
from app.routes import admin

from app.auth import routes as auth

from app.database import Base, engine

# Import models so SQLAlchemy knows the tables
import app.models


# Create database tables
Base.metadata.create_all(
    bind=engine
)


# Create FastAPI application
app = FastAPI(
    title="WorkHub API",
    description="Backend API for WorkHub digital services",
    version="1.0.0"
)


# CORS configuration
app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)



# Routes

app.include_router(
    contacts.router
)


app.include_router(
    projects.router
)


app.include_router(
    services.router
)


app.include_router(
    admin.router
)


app.include_router(
    auth.router
)


@app.get("/")
def root():

    return {
        "message": "WorkHub API is running 🚀"
    }