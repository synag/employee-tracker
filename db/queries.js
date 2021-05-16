const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, '', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  findAllEmployeesByDepartment() {
    return this.connection.query(
      `SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, '', manager.last_name) AS manager 
      FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id
     Where department.name ="Sales"`)//need to add prompt info and update template literal
  }
  findAllEmployeesByManger() {
    return this.connection.query(
      `SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, '', manager.last_name) AS manager 
            FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id
            WHERE employee.manager_id = employee.manager_id`
    );
  }
  addEmployee() {
    return this.connection.query(
      `INSERT INTO employee (first_name, last_name, role_id,manager_id)
        VALUES (${"Mark"}, ${"Eddy"}, ${3},${10});`
    );
  }

  removeEmployee() {
    return this.connection.query(
      `DELETE FROM employee
    WHERE id = ${3}`
    );
  }

  updateEmployeeRole() {
    return this.connection.query(
      `UPDATE employee
    Set role_id = ${1}
    WHERE id = ${3}`
    );
  }


  updateEmployeeManager() {
    return this.connection.query(
      `UPDATE employee
    Set manager_id = ${1}
    WHERE id = ${3}`
    );
  }
}

module.exports = new DB(connection);
