# CountriesBeen Backend

The backend for the **CountriesBeen** app, a platform to track countries users have visited. This backend provides a RESTful API using Node.js, Express, and PostgreSQL.
## Table of Contents

1. [Features](#features)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Database Setup](#database-setup)
5. [Running the Server](#running-the-server)
6. [Frontend Integration](#frontend-integration)
7. [Contributing](#contributing)


---
## Features

- Retrieve all users.
- Create new users.
- Update visited countries for a user.
- Fully RESTful API with proper status codes.
- PostgreSQL database integration.

---

## Requirements

Before running the backend, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **PostgreSQL** (version 12 or later)
- **Docker** (optional, for containerized setup)

---

## Installation

### 1. Clone the Repository

```
git clone <repository-url>
cd countriesBeen-BE
```

### 2.
```bash
npm install
```

### 3. Environment Configuration
Create a ```.env``` file in the root directory and configure the following:
```bash
PORT=5000
PG_HOST=localhost
PG_PORT=5432
PG_USER=app_user
PG_PASSWORD=secure_password
PG_DATABASE=countries_app
```
if using Docker, ensure ```PG_HOST=database```to match the Docker Compose setup.

## Database Setup

### Using PostgresSQL Locally
1. Connect to PostgreSQL:
```bash
psql -U postgres
```
2. create the database and user:
```sql 
CREATE DATABASE countries_app;
CREATE USER app_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE countries_app TO app_user;
``` 
3. Create the required table:
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    visited_countries TEXT[] DEFAULT '{}'
);
```
### Using Docker (Optional)
If you prefer using Docker, run:
```bash
docker-compose up --build
```
This will setup both Database and backend

## Running the Server
Start the server with:
```bash
npm start
```
The server will run on ```http://localhost:5000```.

## Frontend Integration
The frontend for this project is available at:

GitHub Repository: [countriesBeen-FE](https://github.com/Lz-01/countriesBeen-FE)

## Contributing
Feel free to fork this repository, submit issues, and send pull requests to improve the project.


