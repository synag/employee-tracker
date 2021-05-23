const { removeListener } = require("./connection");
const connection = require("./connection");




class DB {
  constructor(connection) {
     this.connection = connection;
  } //Done
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name,  '  ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
    );
  }
//Done
  findAllEmployeesByDepartment = (dept) => {
    return this.connection.query(` SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, ' ' , manager.last_name) AS manager 
    FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id
  WHERE department.id = ${dept}`);
 
}
//done
findAllEmployeesByManager = (manager) => {
  return this.connection.query(` SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, ' ' , manager.last_name) AS manager 
  FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id
WHERE employee.manager_id = ${manager}`);

} //done
  getManagersList(){
    return this.connection.query(
    `SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, ' ' , manager.last_name) AS manager 
    FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id
  WHERE employee.manager_id is NULL` );
  }

  addEmployee =(firstName, lastName,role, managerId) => {
    return this.connection.query(`INSERT INTO employee (first_name,last_name, role_id,manager_id) VALUES ('${firstName}', '${lastName}',${role},${managerId})`);
    
    
  }
  deleteEmployee = (id) => {
  
    return this.connection.query(`DELETE FROM employee where id = ${id}`)
  }

  updateEmployeeRole =(role,id) => {
  
    return this.connection.query(`UPDATE employee SET role_id =${role} where id =${id}`) 
    
  }


  updateEmployeeManager =(manager, id) => {
  
    return this.connection.query(`UPDATE employee SET manager_id =${manager} where id =${id}`) 
    
  }
  
  
}

module.exports = new DB(connection);

