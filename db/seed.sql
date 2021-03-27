DROP DATABASE IF EXISTS employee_DB;

CREATE database employee_DB;

USE employee_DB;

CREATE TABLE employees (
    employee_id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    role_id INTEGER (11),
    manager_id INTEGER (11) NULL,
    PRIMARY KEY (employee_id)
);

CREATE TABLE role (
    role_id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR (30),
    salary DECIMAL (10, 2),
    department_id INTEGER (11),
    PRIMARY KEY (role_id)
);

CREATE TABLE department (
    department_id INTEGER AUTO_INCREMENT,
    department_name VARCHAR (30),
    PRIMARY KEY (department_id)
);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Stark", 1, 00000), ("Pepper", "Potts", 1, 00000);

INSERT INTO department (department_id, department_name)
VALUES (1, "Admin"), (2, "Engineering"), (3, "Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 300000.00, 1), ("Front-End Developer", 250000.00, 2), ("Back-End Developer", 250000.00, 2),("Engineer", 300000.00, 2), 
("Salesperson", 100000.00, 3), ("Social Media Specialist", 200000.00, 1);