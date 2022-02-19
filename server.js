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
    if (err) throw err; 
    console.table(results);
    mainMenu();
  })
};

function viewRoles() {
  connection.query('SELECT r.id, r.title, r.salary, d.name FROM role AS r JOIN department AS d ON r.department_id = d.id',
  function (err, results) {
    if (err) throw err; 
    console.table(results);
    mainMenu();
  });
}


function viewEmployees() {
  var sql = 
  `SELECT e.id, e.first_name, e.last_name, r.title, d.name, r.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
  FROM employee e 
    LEFT JOIN role r 
      ON e.role_id = r.id 
    LEFT JOIN department d 
      ON d.id = r.department_id
    LEFT JOIN employee manager
      ON manager.id = e.manager_id`
  connection.query(sql, function (err, results) {
    if (err) throw err; 

    console.table(results);
    mainMenu();
  });
}

function addDepartment(){
  connection.query(`SELECT department.name FROM department`, function(err, res){
    if (err) throw err; 
    prompt();
  })

  function prompt(){
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the new department name"
      }
    ])
    .then(function(res){
      console.log(res)
      var sql = `INSERT INTO department SET ?`
      connection.query(sql,
        res, function(err, res){
        if (err) throw err; 
        mainMenu();
      });
    })
  }
}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department 
// for the role and that role is added to the database
function addRole(){  
  var sql = `
    SELECT department.id, department.name 
    FROM department`
  connection.query(sql, function(err, res){
    if (err) throw err; 
    var select_department = res.map(({ id, name }) => ({
      value: id, name: `${name}`
    }))
    console.log(select_department);
    prompt(select_department);
  })

  function prompt(select_department){
    inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Please enter the new role title"
      },      {
        type: "input",
        name: "salary",
        message: "Please enter the new role salary"
      },
      {
        type: "list",
        name: "department_id",
        message: "Please select the appropriate department for this role",
        choices: select_department
      }
    ])
    .then(function(res){
      console.log(res)
      var sql = `INSERT INTO role SET ?`
      connection.query(sql,
        res, function(err, res){
        if (err) throw err; 
        mainMenu();
      });
    })
  }
}


// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, 
// and manager, and that employee is added to the database


// first last name 
//query to find all roles, and choose roles 
// map out role 
// choose manager , map out manager 
// filter to get managers 
//create (long)



function addEmployee(){
  var sql = `
  SELECT role.id, role.title 
  FROM role`
  connection.query(sql, function(err, res){
    if (err) throw err; 
    var select_role = res.map(({ id, title }) => ({
      value: id, name: `${title}`
    }))
    console.log(select_role);
    prompt(select_role);
  })

  function prompt(select_role){
    inquirer.prompt([
      {
        type: "input",
        name: "first_name",
        message: "Please enter the new employee's first name"
      },      {
        type: "input",
        name: "last_name",
        message: "Please enter the new employee's last name"
      },
      {
        type: "list",
        name: "role_id",
        message: "Please select the appropriate role for this employee",
        choices: select_role
      }
    ])
    .then(function(res){
      console.log(res)
      var sql = `INSERT INTO employee SET ?`
      connection.query(sql,
        res, function(err, res){
        if (err) throw err; 
        mainMenu();
      });
    })
  }
}

//WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role 
// and this information is updated in the database

function updateRole(){
  connection.query(``, function (err,res){
    if(err) throw err; 
    
    
  })
}

// DELETE FROM ... WHERE ... = ...

//UPDATE ... SET ... WHERE id = ... 