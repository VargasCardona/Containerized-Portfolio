from peewee import Model, MySQLDatabase, AutoField, CharField, IntegerField, DateField,ForeignKeyField,  DateTimeField
from config.settings import DATABASE

from datetime import datetime 
import pytz

database = MySQLDatabase(
    DATABASE["name"],
    user=DATABASE["user"],
    passwd=DATABASE["password"],
    host=DATABASE["host"],
    port=DATABASE["port"],
)

Colombian = pytz.timezone('America/Bogota')

class FormModel(Model):
    id_form = AutoField(primary_key=True)
    name = CharField(max_length=40)
    email = CharField(max_length=40)
    message = CharField(max_length=40)

    class Meta:
        database = database
        table_name = "forms"
