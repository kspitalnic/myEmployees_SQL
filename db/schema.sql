DROP DATABASE IF EXISTS myEmployees;
CREATE DATABASE IF NOT EXISTS myEmployees;
USE myEmployees;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL, 
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL,
    manager_id INT,
    CONSTRAINT fk_role  FOREIGN KEY (role_id) REFERENCES role(id), 
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES role(id)
);