const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//credentials for server conneciton 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Max2390!',
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
const viewEmployees = (answers) => {
    const query = "SELECT id, first_name, last_name, role_id FROM employees"
    connection.query(query, [answers.first_name, answers.last_name], (err, res) => {
        res.forEach(({ id, first_name, last_name, role_id }) => {
            console.log(`ID: ${id}|| Full Name: ${first_name} ${last_name}  || Title: ${role_id}`)
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
        ]).then((answers) => {
            connection.query('INSERT INTO employees SET ?',
                {
                    first_name: answers.first_name,
                    last_name: answers.last_name,
                    role_id: roles(answers.role_id),
                    manager_id: answers.manager_id,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Employee added!');
                    mainMenu();
                });
        });
};

const roles = (answers) => {
    switch (answers.role_id) {
        case 'Manger':
            role_id = 1;
            break;
        case 'Front-End Developer':
            role_id = 2;
            break;
        case 'Back-End Developer':
            role_id = 3;
            break;
        case 'Engineer':
            role_id = 4;
            break;
        case 'Salesperson':
            role_id = 5;
            break;
        case 'Social Media Specialist':
            role_id = 6;
            break;
    }
}

//function to update employee role 
const updateEmployeeRoles = () => { };

mainMenu();