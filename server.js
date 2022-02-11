const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
var inquirer = require('inquirer');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootpassword',
    database: 'myEmployees'
  },
  console.log('Connected to the myEmployees database.'),
  mainMenu()
);

function mainMenu() {
  inquirer
    .prompt({
      type: 'list',
      name: 'menu',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role'
        ]
    })
    .then(function ({ menu }) {
      if (menu = 'View all departments') {
        viewDepartments();
      }
      else if (menu = 'View all roles') {
        viewRoles();
      }
      else if (menu = 'View all employees') {
        viewEmployees();
      }
      else if (menu = 'Add a department') {
        addDepartment();
      }
      else if (menu = 'Add a role') {
        addRole();
      }
      else if (menu = 'Add an employee') {
        addEmployee();
      }
      else if (menu = 'Update an employee role') {
        updateRole();
      }
    })
};

function viewDepartments() {
  connection.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  });
  mainMenu();
};

function viewRoles() {
  connection.query('SELECT * FROM role', function (err, results) {
    console.table(results);
  });
  mainMenu();
}

function viewEmployees() {
  connection.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  }).then(mainMenu())
}