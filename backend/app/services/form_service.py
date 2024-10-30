from config.database import FormModel
from schemas.form import FormCreate 

from peewee import IntegrityError
from fastapi import Body

def create_form(form: FormCreate = Body(...)):
    try:
        FormModel.create(
            name=form.name,
            email=form.email,
            message=form.message,
        )
        return {"message": "Form created successfully"}
    except IntegrityError:
        return {"error": "Form already exists"}

def get_forms():
    form = FormModel.select().where(FormModel.id_form > 0).dicts()
    return list(form)

def get_form(id_form: int):
    try:
        form = FormModel.get(FormModel.id_form == id_form)
        return form
    except FormModel.DoesNotExist:
        return {"error": "Form not found"}

def delete_form(id_form: int):
    try:
        FormModel.delete().where(FormModel.id_form == id_form).execute()
        return {"message": "Form deleted successfully"}
    except FormModel.DoesNotExist:
        return {"error": "Form not found"}
