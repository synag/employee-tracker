use employee_managementDB;

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Human", "Krewella", 2,10);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Marcus", "Hunter", 1,10);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Laura", "Frasier", 3,10);



INSERT INTO emp_role (title, salary, department_id)
VALUES ("Mid-Level Engineer", 80000, 11);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("junior-Engineer", 60000, 11);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Senior Engineer",120000, 11);


INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO department (name)
VALUES ("Purchasing");

INSERT INTO department (name)
VALUES ("Engineering");

