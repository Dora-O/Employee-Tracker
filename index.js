const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//credentials for server conneciton 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '',
    database: 'employee_db'
});

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
    }).then(answers =>{
        switch(answers.menu){
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

const viewDepartments = () => {};

const addDepartments = () => {};

const viewRoles = () => {};

const addRoles = () => {};

const addEmployees = () => {};

const viewEmployees = () => {};

const updateEmployeeRoles = () => {};