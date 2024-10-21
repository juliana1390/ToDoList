# Backend - To Do List

This repository contains a backend project developed with Spring Boot and PostgreSQL, containerized using Docker. Follow the instructions below to set up and run the project in your local environment.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)


## Getting Started

### Linux (Ubuntu, Debian, Mint):

1. **Clone the repository**

   ```bash
   git clone https://github.com/juliana1390/ToDoList.git
   cd ToDoList
   ```
   
2. **Configure environment variables**
 
    Create the .env file in the root directory of the ToDoList project.

    Once you have the .env file open, you can start adding your environment variables in the following format:
    
    ```bash
    # Don't forget to change the placeholders below to your actual credentials!
    
    # PostgreSQL Database Variables
    POSTGRES_USER=your_username
    POSTGRES_PASSWORD=your_password
    POSTGRES_DB=your_database_name
    
    # Spring Framework Variables
    SPRING_DATASOURCE_URL=jdbc:postgresql://your_host:your_port/your_database_name
    SPRING_DATASOURCE_USERNAME=your_username
    SPRING_DATASOURCE_PASSWORD=your_password
    SPRING_JPA_HIBERNATE_DDL_AUTO=update
     ```
     
 3. **Run the backend project**
 
    Build and run the Docker containers:
    
    ```bash
    docker compose up --build
    ```
