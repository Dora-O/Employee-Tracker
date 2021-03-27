const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//credentials for server conneciton 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '',
    database: 'employee_db'
});

//main menu prompts user what they'd like to do
const mainMenu = () => {
    inquirer
        .prompt({
            name: 'menu',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Departments',
                'Add Departments',
                'View Roles',
                'Add Roles',
                'View Employees',
                'Add Employees',
                'Update Employee Roles',
                'Exit'
            ]
        }).then(answers => {
            switch (answers.menu) {
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'Add Departments':
                    addDepartments();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'Add Roles':
                    addRoles();
                    break;
                case 'View Employees':
                    viewEmployees();
                    break;
                case 'Add Employees':
                    addEmployees();
                    break;
                case 'Update Employee Roles':
                    updateEmployeeRoles();
                    break;
                case 'Exit':
                    console.log('Goodbye');
            };
        });
};

//function to view depts
const viewDepartments = () => {
    const query = "SELECT id, name FROM departments"
    connection.query(query, (err, res) => {
        res.forEach(({ id, name }) => {
            console.log(`ID: ${id}|| Name: ${name}`)
        });
        mainMenu();
    });
};

//function to add depts
const addDepartments = () => {
    inquirer
    .prompt([
        {
            name: 'dept_name',
            type: 'input',
            message: 'What is the name of the new department?',
        },
        {
            name: 'dept_id',
            type: 'input',
            message: 'What is the ID of the new department?'
        },
    ])
};

//function to view roles 
const viewRoles = () => {
    const query = "SELECT id, title, salary FROM role"
    connection.query(query, (err, res) => {
        res.forEach(({ id, title, salary }) => {
            console.log(`ID: ${id}|| Tile: ${title}|| Salary: ${salary}`)
        });
        mainMenu();
    });
};

//function to add roles 
const addRoles = () => {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the title of this role?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary of this role?'
            }
        ])
};

//function to view employess 
const viewEmployees = () => {
    const query = "SELECT id, first_name, last_name, role_id FROM employee"
    connection.query(query, (err, res) => {
        res.forEach(({ id, first_name, last_name }) => {
            console.log(`ID: ${id}|| Full Name: ${first_name} ${last_name}`)
        });
        mainMenu();
    });
};

//function to add employees 
const addEmployees = () => {
    inquirer
        .prompt([
            {
                name: 'first_name',
                type: 'input',
                message: "What is the employee's first name?"
            },
            {
                name: 'last_name',
                type: 'input',
                message: "What is the employee's last name?"
            },
            {
                name: 'role_id',
                type: 'list',
                message: "What is the employee's role?",
                choices: [
                    'Manager',
                    'Front-End Developer',
                    'Back-End Developer',
                    'Engineer',
                    'Salesperson',
                    'Social Media Specialist',
                ]
            },
            {
                name: 'manager_id',
                type: 'input',
                message: "What is the employee's manager ID?",
            }
        ])
};

//function to update employee role 
const updateEmployeeRoles = () => { };

mainMenu();