use employee_managementDB;

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Human", "Krewella", 2,3);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Marcus", "Hunter", 2,3);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Laura", "Frasier", 3,9);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Sarah", "Lewis", 1,10);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("John", "Benbow", 2,3);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Mike", "Johnson", 3,9);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Camilla", "Calypso", 1,10);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Megan", "Bayless", 2,3);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Shannon", "Sharp", 1,10);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Tim", "Tebow", 1,10);



INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 110000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales",120000, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 120000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resource", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Financial Associate",100000, 1);


INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Sales");

