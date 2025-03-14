# TodoList App

## Project Overview
This is a TodoList application built with:
- **Frontend**: React + Vite, styled with TailwindCSS
- **Backend**: Node.js
- **Database**: MySQL

## Getting Started

### 1. Setting Up the Database
#### If You Don't Have MySQL Installed
- **Option 1: Install XAMPP** (Includes MySQL, Apache, and phpMyAdmin)
  - Download and install [XAMPP](https://www.apachefriends.org/download.html)
  - Start the MySQL service from the XAMPP control panel
- **Option 2: Install MySQL Directly**
  - Download and install [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
  - Start MySQL server

#### Creating the Database
Once MySQL is running, create the database and table:
1. Open MySQL command line or phpMyAdmin
2. Run the following SQL script:

```sql
CREATE DATABASE IF NOT EXISTS todolist_itmagnet;

USE todolist_itmagnet;

CREATE TABLE IF NOT EXISTS todolist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL,
    status TINYINT(1) NOT NULL COMMENT '0: To do, 1: In progress, 2: Done'
);

-- Insert dummy IT project tasks
INSERT INTO todolist (title, description, status) VALUES
('Set up project repository', 'Create a GitHub repository and initialize the project', 2),
('Design database schema', 'Define tables and relationships for the database', 1),
('Develop authentication module', 'Implement user login and registration', 0),
('Create API endpoints', 'Build RESTful APIs for data retrieval', 1),
('Frontend UI development', 'Design and develop the main dashboard interface', 0),
('Write unit tests', 'Ensure code quality with automated tests', 0),
('Deploy application', 'Set up hosting and deploy the project to production', 1),
('Fix reported bugs', 'Address issues reported during testing', 2),
('Optimize performance', 'Improve response time and scalability', 1),
('Prepare documentation', 'Write user guides and developer documentation', 0);

```

### 2. Running the Frontend Project
The frontend is inside the `todolist` folder.
#### Install Dependencies
Navigate to the frontend folder:
```sh
cd todolist
```
Install dependencies using **yarn** or **npm**:
```sh
yarn install
# or
npm install
```

#### Start the Frontend Server
To start the frontend development server:
```sh
yarn dev
# or
npm run dev
```
This will start the application and provide a local development URL
```sh
http://localhost:5173/
```

### 3. Running the Backend Project
#### Install Dependencies
Navigate to the backend folder:
```sh
cd backend
```
Install dependencies:
```sh
yarn install
# or
npm install
```

#### Start the Backend Server
Run the following command:
```sh
yarn start
# or
npm start
```

This will start the backend server and connect it to the database.

```sh
GET All
http://localhost:4000/api/todolist

GET selected id 
http://localhost:4000/api/todolist/1

POST Method
http://localhost:4000/api/todolist

PUT Method
http://localhost:4000/api/todolist/1

DELETE Method
http://localhost:4000/api/todolist/1
```