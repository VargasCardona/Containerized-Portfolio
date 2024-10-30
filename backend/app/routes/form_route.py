# pylint: disable=import-error
from schemas.form import FormCreate
from services import form_service

# pylint: enable=import-error

from peewee import IntegrityError
from fastapi import APIRouter, Body

form_route = APIRouter()

@form_route.post("/form/")
def create_form(form: FormCreate = Body(...)):
    return form_service.create_form(form)

@form_route.get("/forms")
def get_forms():
    return form_service.get_forms()

@form_route.get("/forms/{id_form}")
def get_form(id_form: int):
    return form_service.get_form(id_form)

@form_route.delete("/forms/{id_form}")
def delete_form(id_form: int):
    return form_service.delete_form(id_form)
