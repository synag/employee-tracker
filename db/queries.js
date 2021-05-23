const connection = require("./connection");




class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name,  '  ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  findAllEmployeesByDepartment = (dept) => {
    const query = ` SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, ' ' , manager.last_name) AS manager 
    FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id
  WHERE department.id = ?`;
   connection.query(query, dept, (err, res) => {
       console.log(res)
       connection.end();

   })
}

findAllEmployeesByManager = (one) => {
  const query = ` SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, ' ' , manager.last_name) AS manager 
  FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id
WHERE employee.manager_id = ?`;
 connection.query(query, one, (err, res) => {
     console.log(res)
     connection.end();
   
  });
}
  getManagersList(){
    return this.connection.query(
    `SELECT employee.id, employee.first_name,employee.last_name, role.title, department.name AS department, role.salary,CONCAT(manager.first_name, ' ' , manager.last_name) AS manager 
    FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id
  WHERE employee.manager_id is NULL` );
  }

  addEmployee =(firstName, lastName,role, managerId) => {
  
    const query = `INSERT INTO employee SET?`
    connection.query(query,{first_name:firstName, 
      last_name: lastName,
      role_id:role, 
      manager_id :managerId}, 
      (err,res) =>{
      console.log(res);
      connection.end()
    })
    
  }
  deleteEmployee = (id) => {
  
    const query = `DELETE FROM employee where?`
    connection.query(query,
      [
        {
          id: id,
        },
      ],
    (err,res) =>{
      console.log(res);
      connection.end()
    })
  }

  updateEmployeeRole =(role, id) => {
  
    const query = `UPDATE employee SET? where ?` 
    connection.query(query,
      [
        {
          role_id: role,
        },
        
        {
          id: id,
        },
      ],
      (err,res) =>{
      console.log(res);
      connection.end()
    })
    
  }


  updateEmployeeManager =(manager, id) => {
  
    const query = `UPDATE employee SET? where ?` 
    connection.query(query,
      [
        {
          manager_id: manager,
        },
        
        {
          id: id,
        },
      ],
      (err,res) =>{
      console.log(res);
      connection.end()
    })
  }
  
  
}

module.exports = new DB(connection);

