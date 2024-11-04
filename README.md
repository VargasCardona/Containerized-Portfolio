# Containerized-Portfolio
![Repo Size](https://img.shields.io/github/repo-size/VargasCardona/Containerized-Portfolio)
![GitHub License](https://img.shields.io/github/license/VargasCardona/Containerized-Portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/VargasCardona/Containerized-Portfolio)
![GitHub top language](https://img.shields.io/github/languages/top/VargasCardona/Containerized-Portfolio)

Portfolio developed using **React** for the frontend, **FastAPI** for the backend, and a **MySQL** database. Everything is containerized using **Docker** and orchestrated with **Docker Compose**. Additionally, **Adminer** is used for database management and **cron jobs** for regular database backups.

## Features

- **Frontend**: Built with React, providing a dynamic and responsive user interface.
- **Backend**: FastAPI for building APIs, ensuring high performance and scalability.
- **Database**: MySQL to manage data with robust querying capabilities.
- **Docker**: All components are containerized, making it easy to set up and run the application.
- **Docker Compose**: Simplifies running multi-container Docker applications.
- **Adminer**: A lightweight database management tool to interact with the MySQL database.
- **Cron Backups**: Automated backups of the database to ensure data integrity and safety.

## Preview
![2024-11-0413-45-56online-video-cutter com-ezgif com-resize](https://github.com/user-attachments/assets/6367d5a5-24dd-4518-9bb2-af7852eeb3c6)

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/VargasCardona/Containerized-Portfolio.git
   cd Containerized-Portfolio
   ```

2. Build and run the containers:
    ```bash
    docker-compose up --build
    ```

3. Access the application:
    ```bash
    Frontend: https://localhost
    ```

## Technologies Used
- Frontend: React
- Backend: FastAPI
- Database: MySQL
- Containerization: Docker & Docker Compose
- Database Management: Adminer
- Backups: Cron

## License
This project is licensed under the [GNU General public license](https://www.gnu.org/licenses/) - see the LICENSE file for details.
