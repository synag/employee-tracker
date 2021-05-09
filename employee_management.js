inquirer = require('inquirer');
console = require('console.table');
mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'root',
  
    password: 'root',
    database: 'employee_managementDB',
  });




//menu function - use switch (Includes choices for all functions/(descriptions message at bottonmove up and down to reval more choices)


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