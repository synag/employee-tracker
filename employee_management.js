const inquirer = require("inquirer");
// const console = require("console.table");
const db = require("./db/queries")



// menu function =() =>use switch (Includes choices for all functions/(descriptions message at bottonmove up and down to reval more choices)
const start = () => {
  inquirer
    .prompt({
      name: "opening",
      type: "list",
      message: "Welcome! What would you like to do?",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employeees by manager",
        "Add employees ",
        "Remove employees",
        "Update employee by role",
        "update employee manager",
        "Exit Application"
      ],
    })
    .then((answer) => {
      switch (answer.opening) {
        case "View all employees":
          viewEmployees();
          break;

        case "View all employees by department":
          viewAllEmployeesByDept();
          break;

        case "View all employeees by manager":
          viewAllEmpoyeesByManager();
          break;

        case "Add employees ":
          addEmployee();
          break;

        case "Remove employees":
          removeEmployee();
          break;

        case "Update employee by role":
          UpdateEmployeeByRole();
          break;

        case "update employee manager":
          updateEmployeeManager();
          break;

        case "Exit Application":
          // connection.end();
         
          break;
      }
    });
};


async function viewEmployees(){
  let employees = await db.findAllEmployees()
  console.table(employees);
}

async function viewAllEmployeesByDept(){ 
  let employeesDept = await db.findAllEmployeesByDepartment()
  console.table(employeesDept);
}

async function addEmployee(){ 
  let employeeAdd = await db.addEmployee()
  console.table(employeeAdd);
}

async function removeEmployee(){ 
  let employeesRemove = await db.removeEmployee()
  console.table(employeesRemove);
}

async function UpdateEmployeeByRole(){ 
  let employeeUpdateRole = await db.updateEmployeeRole()
  console.table(employeeUpdateRole);
}

async function updateEmployeerole(){ 
  let employeeUpdateManger = await db.updateEmployeeManager()()
  console.table(employeeUpdateManger);
}

start()

// start()
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

