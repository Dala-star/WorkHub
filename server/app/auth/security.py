from jose import jwt
from datetime import datetime, timedelta


SECRET_KEY = "workhub-secret-key"

ALGORITHM = "HS256"



def create_token(username):

    payload = {

        "sub": username,

        "exp":
        datetime.utcnow()
        +
        timedelta(hours=2)

    }


    token = jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )


    return token