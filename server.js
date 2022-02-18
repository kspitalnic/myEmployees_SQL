const express = require('express');
const app = express();
const mysql = require('mysql2');
var inquirer = require('inquirer');
require("console.table");

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
      if (menu === 'View all departments') {
        viewDepartments();
        return;
      }
      else if (menu === 'View all roles') {
        viewRoles();
      }
      else if (menu === 'View all employees') {
        viewEmployees();
      }
      else if (menu === 'Add a department') {
        addDepartment();
      }
      else if (menu === 'Add a role') {
        addRole();
      }
      else if (menu === 'Add an employee') {
        addEmployee();
      }
      else if (menu === 'Update an employee role') {
        updateRole();
      }
    })
};

function viewDepartments() {
  connection.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    mainMenu();
  })
};

function viewRoles() {
  connection.query('SELECT r.id, r.title, r.salary, d.name FROM role AS r JOIN department AS d ON r.department_id = d.id',
  function (err, results) {
    console.table(results);
    mainMenu();
  });
}

// THEN I am presented with a formatted table showing employee data, 
// including employee ids, first names, last names, job titles, departments, salaries, 
// and managers that the employees report to

function viewEmployees() {
  var query = 
  `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e 
    LEFT JOIN role r 
      ON e.role_id = r.id 
    LEFT JOIN department d 
      ON d.id = r.department_id
    LEFT JOIN employee m 
      ON m.id = e.manager_id`
  connection.query(query, function (err, results) {
    console.table(results);
    mainMenu();
  });
}