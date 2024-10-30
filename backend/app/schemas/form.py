from pydantic import BaseModel, Field


class Form(BaseModel):
    id_form: int
    name: str = Field(..., max_length=40)
    email: str = Field(..., max_length=40)
    message: str = Field(..., max_length=100)

    class Config:
        orm_mode = True


class FormCreate(BaseModel):
    name: str = Field(..., max_length=40)
    email: str = Field(..., max_length=40)
    message: str = Field(..., max_length=100)
