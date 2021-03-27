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