from fastapi import APIRouter, HTTPException

from app.auth.security import create_token



router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)



ADMIN_USERNAME = "admin"

ADMIN_PASSWORD = "admin123"




@router.post("/login")
def login(data:dict):


    if (

        data["username"]
        !=
        ADMIN_USERNAME

        or

        data["password"]
        !=
        ADMIN_PASSWORD

    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )



    token = create_token(
        ADMIN_USERNAME
    )


    return {

        "access_token": token

    }