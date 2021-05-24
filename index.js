const inquirer = require("inquirer");
const consoleT = require("console.table");
const db = require("./db/queries");
const { updateEmployeeRole } = require("./db/queries");
const managerSelected = [];
const managerNames = [];
const employeeNames = [];
const employeeIds = [];
const managerIds = []
const getRoles =[]
const roleIds = []

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
//          viewEmployeesByManager()
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


async function viewEmployees() {
  let employees = await db.findAllEmployees();
  let tabularView = consoleT.getTable([], employees);
  console.log(tabularView);
  // start()
}
//works but need a switch statement and hardcode id and also the department
async function viewAllEmployeesByDept(dept) {
  let employeesDept = await db.findAllEmployeesByDepartment(dept);
  tabularView = consoleT.getTable([], employeesDept);
  console.log(tabularView);
}

async function employeeAdd(firstName, lastName, role, managerId) {
  let employeeAdd = await db.addEmployee(firstName, lastName, role, managerId);
  console.log(employeeAdd);

  // start()
}

async function removeEmployee(employeeId) {
  let employeesRemove = await db.deleteEmployee(employeeId);

  // start()
}
async function updateEmployeesRole(){
  let employeeInfo = await db.findAllEmployeesWithoutManagers();
  employeeInfo.forEach((employee) =>
    employeeNames.push(employee.first_name + " " + employee.last_name)
  );
  employeeInfo.forEach((employeeId) => employeeIds.push(employeeId.id));

  getListofRoles()

  const updateRolePrompt = [
    {
      type: "list",
      name: "employeeList",
      message: "Which employee would you like to update?",
      choices: employeeNames,
    },
    {
      type: "list",
      name: "roleList",
      message: "Which role would like to change to?",
      choices: getRoles,
    },
  ];
  inquirer.prompt(updateRolePrompt).then((answer) => {

    let selectedEmployeeId =
    employeeIds[employeeNames.indexOf(answer.employeeList)];
  let selectedRole = roleIds[getRoles.indexOf(answer.roleList)]

    updateEmployeeByRole(selectedRole, selectedEmployeeId)
   async function updateEmployeeByRole(selectedRole, selectedEmployeeId) {
  let employeeUpdateRole = await db.updateEmployeeRole(selectedRole, selectedEmployeeId);

}

    }

  )}







async function updateEmployeeManager() {
  let employeeInfo = await db.findAllEmployeesWithoutManagers();
  employeeInfo.forEach((employee) =>
    employeeNames.push(employee.first_name + " " + employee.last_name));
  employeeInfo.forEach((employeeId) => employeeIds.push(employeeId.id));

  getListofManagers()

  const updateManagerPrompt = [
    {
      type: "list",
      name: "employeeList",
      message: "Which employee would you like to update?",
      choices: employeeNames,
    },
    {
      type: "list",
      name: "managerList",
      message: "Which manager would you like to update?",
      choices: managerNames,
    },
  ];
  inquirer.prompt(updateManagerPrompt).then((answer) => {
    let selectedEmployeeId =
      employeeIds[employeeNames.indexOf(answer.employeeList)];
    let selectedManager = managerIds[managerNames.indexOf(answer.managerList)];
   
    findAndUpdateEmployeeManager(selectedManager, selectedEmployeeId)
    async function findAndUpdateEmployeeManager(selectedManager, selectedEmployeeId) {
      let employeeUpdateManger = await db.updateEmployeeManager(
        selectedManager,
        selectedEmployeeId
      );
      console.table(employeeUpdateManger);
    }
  });
}




 function viewEmployeesByManager() {
  getListofManagers()

  const managers = [
    {
      type: "list",
      name: "managerList",
      message: "Select the Manager",
      choices: managerNames,
    },
  ];
  inquirer.prompt(managers).then((answer) => {
    switch (answer.managerList) {
      case managerNames[0]:
        managerSelected.push(managerInfo[0].id);
        async function getManagerStaff(managerSelected) {
          let managerEmployees = await db.findAllEmployeesByManager(
            managerSelected
          );
          tabularView = consoleT.getTable([], managerEmployees);
          console.log(tabularView);
        }
        getManagerStaff(managerSelected);

        break;

      case managerNames[1]:
        managerSelected.push(managerInfo[1].id);
        getManagerStaff(managerSelected);

        break;

      case managerNames[2]:
        managerSelected.push(managerInfo[2].id);
        getManagerStaff(managerSelected);
    }
  });
}

async function getListofManagers(){
  let managerInfo = await db.getManagersList();
  managerInfo.forEach((manager) =>
    managerNames.push(manager.first_name + " " + manager.last_name)
  );

  managerInfo.forEach((manager) => managerIds.push(manager.id));
  }

async function getListofRoles(){
  let managerInfo = await db.getRoles();
  managerInfo.forEach((roles) => getRoles.push(roles.title));
  managerInfo.forEach((roles) => roleIds.push(roles.id));
}
 
  
updateEmployeesRole()