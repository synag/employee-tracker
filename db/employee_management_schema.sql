DROP DATABASE IF EXISTS employee_managementDB;
CREATE database employee_managementDB;

USE employee_managementDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL,
  department_id INT NULL,
  PRIMARY KEY (id)
);



