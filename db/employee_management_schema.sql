DROP DATABASE IF EXISTS employee_managementDB;
CREATE database employee_managementDB;

USE employee_managementDB;

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE emp_role (
  id INT NOT NULL,
  title VARCHAR(30) NULL,
  salary decimal,
  department_id int,
  PRIMARY KEY (id)
);



-- SELECT * FROM top5000;
-- select * from top_albums;
