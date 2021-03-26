const mysql = require('mysql');
const inquirer = require('inquirer');
const express = require('express');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '',
    database: 'employee_db'
});