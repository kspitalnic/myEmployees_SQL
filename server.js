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
      type:'list',
      name:'menu',
      message:'What would you like to do?',
      choices:[
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        "Exit"
      ]
    })
    .then(function({ menu }) {
      if (menu = 'View all departments') {
        viewDepartments();
        return;
      }
      else if (menu = 'View all roles') {
        viewRoles();
        return;
      }
      else if (menu = 'View all employees') {
        viewEmployees();
        return;
      }
      else if (menu = 'Add a department') {
        addDepartment();
        return;
      }
      else if (menu = 'Add a role') {
        addRole();
        return;
      }
      else if (menu = 'Add an employee') {
        addEmployee();
        return;
      }
      else if (menu = 'Update an employee role') {
        updateRole();
        return;
      }
    })
};
 
function viewDepartments() {
  connection.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });};

  function viewRoles() {
    connection.query('SELECT * FROM role', function (err, results) {
      console.log(results);
    });}