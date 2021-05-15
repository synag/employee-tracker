const inquirer = require("inquirer");
const console = require("console.table");
const db = require("./db/queries")


// const connection = mysql.createConnection({
//   host: "localhost",
//    port: 3306,
//   user: "root",
//   password: "root",
//   database: "employee_managementDB",
// });

//menu function - use switch (Includes choices for all functions/(descriptions message at bottonmove up and down to reval more choices)
// const start = () => {
//   inquirer
//     .prompt({
//       name: "opening",
//       type: "list",
//       message: "Welcome! What would you like to do?",
//       choices: [
//         "View all employees",
//         "View all employees by department",
//         "View all employeees by manager",
//         "Add employees ",
//         "Remove employees",
//         "Update employee by role",
//         "update employee manager",
//         "Exit Application"
//       ],
//     })
//     .then((answer) => {
//       switch (answer.opening) {
//         case "View all employees":
//           viewAllEmployees();
//           break;

//         case "View all employees by department":
//           viewAllEmployeeByDept();
//           break;

//         case "View all employeees by manager":
//           viewAllEmpoyeesByManager();
//           break;

//         case "Add employees ":
//           addEmployee();
//           break;

//         case "Remove employees":
//           RemoveEmployee();
//           break;

//         case "Update employee by role":
//           UpdateEmployeeByRole();
//           break;

//         case "update employee manager":
//           updateEmployeeManager();
//           break;

//         case "Exit Application":
//           // connection.end();
         
//           break;
//       }
//     });
// };

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const viewAllEmployees = () => {
  // const query =
  //   'SELECT * FROM employee_managementdb.employee';
  connection.query('SELECT * FROM employee_managementdb.employee', (err, res) => {
  if (err) {throw err
  
}
  // console.log(res);
  // connection.end();
   });
  //  start();
};

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
viewAllEmployees()
