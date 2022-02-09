INSERT INTO department (name)
VALUES
    ('Sales'),
    ('HR'),
    ('IT'),
    ('Management'),
    ('SALES'),
    ('SALES'),
    ('SALES');

INSERT INTO role (name, salary, department_id)
VALUES
    ('Lead Salesman', 65.0, 100),
    ('HR Admin', 54.0, 101),
    ('Technician', 85.5 ,102),
    ('Manager', 100.00, 103),
    ('Salesman', 70.5, 104),
    ('Sales Intern', 55.0, 105),
    ('Salesman', 58.0, 106);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Amy', 'Adams', 202, NULL),
    ('Ben', 'Smith', 101, NULL),
    ('Carly', 'Doe', 404.50, NULL),
    ('Dave', 'Smith', 606, 258),
    ('Edward', 'Jones', 303.62, NULL),
    ('Frank', 'Hills', 101, NULL),
    ('Gianna', 'Pitt', 101.3, NULL);