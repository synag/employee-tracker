const inquirer = require("inquirer");
const consoleT = require("console.table");
const db = require("./db/queries")
const managerSelected = []
const managerTest =[]
// const department =[]
// const employeeAdd = []
// const updateRole = []
// const updateManager =[]


// // menu function =() =>use switch (Includes choices for all functions/(descriptions message at bottonmove up and down to reval more choices)
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
//           viewEmployees();
//           break;

//         case "View all employees by department":
//           viewAllEmployeesByDept();
//           break;

//         case "View all employeees by manager":
//           managersList()
//           break;

//         case "Add employees ":
//           addEmployee();
//           break;

//         case "Remove employees":
//           removeEmployee();
//           break;

//         case "Update employee by role":
//           UpdateEmployeeByRole();
//           break;

//         case "update employee manager":
//           updateEmployeeManager();
//           break;

//         case "Exit Application":
//               connection.end();
         
//           break;
//       }
//     });
// };

// async function viewEmployees(){
//   let employees = await db.findAllEmployees()
//   let tabularView = consoleT.getTable([],employees)
//   console.log(tabularView);
//   start()
// }


// async function viewAllEmployeesByDept(){ 
//   let employeesDept = await db.findAllEmployeesByDepartment("Finance")
//   let tabularView = consoleT.getTable([],employeesDept)
//   console.log(tabularView);
//   start()
// }
// async function  viewAllEmpoyeesByManager(){ 

//   let employeesManager = await db.findAllEmployeesByManger()
//   let tabularView = consoleT.getTable([],employeesManager)
//   console.log(tabularView);
//   start()
// }


// async function addEmployee(){ 
//   let employeeAdd = await db.addEmployee()
//   console.table(employeeAdd);
//   start()
// }

// async function removeEmployee(){ 
//   let employeesRemove = await db.removeEmployee()
//   console.table(employeesRemove);
//   start()
// }

// async function UpdateEmployeeByRole(){ 
//   let employeeUpdateRole = await db.updateEmployeeRole()
//   console.table(employeeUpdateRole);
//   start()
// }

// async function updateEmployeeManager(){ 
//   let employeeUpdateManger = await db.updateEmployeeManager()
//   console.table(employeeUpdateManger);
//   start()
// }

 async function otherManager(){
   const managerObj = await db.getManagersList()
   managerObj.forEach(manager => managerTest.push(manager.first_name +' '+ manager.last_name))
   console.log(managerTest)
    console.log(managerObj[0].id)
  
  const managers = [
    {   
       type: "list",
       name: "managerList",
       message: "Select the Manager",
       choices: managerTest,
     },
    ];
      inquirer.prompt(managers).then((answer) => {
        // console.log(answer)
        switch (answer.managerList) {
          case managerTest[0]:
              managerSelected.push(managerObj[0].id)
               break;
     
             case managerTest[1]:
              managerSelected.push(managerObj[1].id)
              
               break;
     
             case managerTest[2]:
              managerSelected.push(managerObj[2].id)
               break;
   
             
         }

      //  managerSelected.push(answer)
       console.log(managerSelected)
    
      }
    )
 }
       
 
   
      otherManager()
    

// start()



