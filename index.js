const inquirer = require("inquirer");
const consoleT = require("console.table");
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
  let tabularView = consoleT.getTable([],employees)
  console.log(tabularView);
  start()
}

// async function viewEmployees(){
//   let employees = await db.findAllEmployees()
//   let tabularView = consoleT.getTable(['id','first_name','last_name','title','department','salary','manager'],employees)
//   console.log(tabularView);
//   start()
// }

async function viewAllEmployeesByDept(){ 
  let employeesDept = await db.findAllEmployeesByDepartment()
  console.table(employeesDept);
  start()
}
async function  viewAllEmpoyeesByManager(){ 
  let employeesManager = await db.findAllEmployeesByManger()
  console.table(employeesManager);
  start()
}

async function addEmployee(){ 
  let employeeAdd = await db.addEmployee()
  console.table(employeeAdd);
  start()
}

async function removeEmployee(){ 
  let employeesRemove = await db.removeEmployee()
  console.table(employeesRemove);
  start()
}

async function UpdateEmployeeByRole(){ 
  let employeeUpdateRole = await db.updateEmployeeRole()
  console.table(employeeUpdateRole);
  start()
}

async function updateEmployeeManager(){ 
  let employeeUpdateManger = await db.updateEmployeeManager()()
  console.table(employeeUpdateManger);
  start()
}

start()




//use console modele to display database

//Watch video to get started

//Create a class for interacting database ( Create, Delete, Put, Get)
// 12 functions - CRUD for each class and unit testing

