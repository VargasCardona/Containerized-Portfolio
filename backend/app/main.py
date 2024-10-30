"""
This module defines the main entry point for the FastAPI application and manages its lifespan.
"""

from contextlib import asynccontextmanager
from starlette.responses import RedirectResponse
from config.database import database as connection

from routes.form_route import form_route

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Manages the lifespan of the FastAPI application.
    This function ensures that the database connection is open when the application starts
    and closes it when the application shuts down.
    """

    if connection.is_closed():
        connection.connect()
    try:
        yield
    finally:
        if not connection.is_closed():
            connection.close()

app = FastAPI(lifespan=lifespan, title="Microservice for contact forms")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost", "http://localhost:5173", "http://nicolasvargas.com"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)

@app.get("/", include_in_schema=False)
def read_root():
    """
    Root endpoint that redirects to the API documentation.

    Returns:
        RedirectResponse: A response object that redirects the client to the "/docs" URL.
    """
    return RedirectResponse(url="/docs")

app.include_router(
    form_route,
    prefix="/api",
    tags=["Forms"],
)
