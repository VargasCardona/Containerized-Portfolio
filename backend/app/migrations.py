"""
This module defines the database migrations for the application.
Attributes:
  Base: The declarative base class for SQLAlchemy models.
  DATABASE_URL: The database connection URL constructed from the settings.
  engine: The SQLAlchemy engine instance for connecting to the database.
Usage:
  This module is used to define and manage the database schema for the application.
  It includes the User model and the necessary configuration to connect to the database.
"""

from sqlalchemy import Column, Integer, VARCHAR, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from config.settings import DATABASE


Base = declarative_base()


# pylint: disable=R0903

class Form(Base):
    """
    A class used to represent a dentist in the database.
    """

    __tablename__ = "forms"

    id_form = Column(Integer, primary_key=True)
    name = Column(VARCHAR(100))
    email = Column(VARCHAR(100))
    message = Column(VARCHAR(100))

DATABASE_URL = (
    f"mysql+pymysql://{DATABASE['user']}:{DATABASE['password']}@{DATABASE['host']}:"
    + f"{DATABASE['port']}/{DATABASE['name']}"
)
engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
