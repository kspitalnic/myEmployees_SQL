INSERT INTO department (name)
VALUES
    ('Sales'),
    ('HR'),
    ('IT'),
    ('Management'),
    ('Sales'),
    ('Sales'),
    ('Sales'),
    ('Admin');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Lead Salesman', 85.00, 100),
    ('HR Admin', 54.00, 101),
    ('Technician', 85.50 ,102),
    ('Manager', 100.00, 103),
    ('Salesman', 70.50, 104),
    ('Sales Intern', 55.00, 105),
    ('Salesman', 58.00, 106),
    ('Secretary', 33.00, 107);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Amy', 'Adams', 202, NULL),
    ('Ben', 'Smith', 101, NULL),
    ('Carly', 'Doe', 404, NULL),
    ('Dave', 'Smith', 606, 258),
    ('Edward', 'Jones', 303, NULL),
    ('Frank', 'Hills', 101, NULL),
    ('Gianna', 'Pitt', 101, NULL),
    ('Emily', 'Bates', 105, NULL)