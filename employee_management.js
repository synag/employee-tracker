inquirer = require("inquirer");
console = require("console.table");
mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_managementDB",
});

//menu function - use switch (Includes choices for all functions/(descriptions message at bottonmove up and down to reval more choices)
const start = () => {
  inquirer
    .prompt({
      name: "opening",
      type: "list",
      message: "Welcome! What roles do you like to select?",
      choices: [
        "View all employees ",
        "View all employees by department ",
        "View all employeees by manager",
        "Add employees ",
        "Remove employees",
        "Update employee by role",
        "update employee manager",
        "Exit Application",
      ],
    })
    .then((answer) => {
      switch (answer.opening) {
        case "View all employees":
          addManager();
          break;

        case "View all employees by department":
          addIntern();
          break;

        case "View all employeees by manager":
          addEngineer();
          break;

        case "Add employees ":
          addIntern();
          break;

        case "Remove employees":
          addEngineer();
          break;

        case "Update employee by role":
          addIntern();
          break;

        case "update employee manager":
          addEngineer();
          break;

        case "Exit Application":
          // connection.end();
          const htmlPageContent = generate_html(
            managers,
            internTeam,
            engineerTeam
          );
        
          break;
      }
    });
};

//create functions for each selection
//view all employees
//view all employees by department
//view all employeees by manager D
//Add employees
//remove employees
//update employee by role
//update employee manager

//
//use console modele to display database

//Watch video to get started

//Create a class for interacting database ( Create, Delete, Put, Get)
// 12 functions - CRUD for each class and unit testing
