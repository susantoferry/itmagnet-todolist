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
