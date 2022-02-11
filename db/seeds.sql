INSERT INTO department (name)
VALUES
    ('Sales'),
    ('HR'),
    ('IT'),
    ('Management'),
    ('Admin');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 100.00, 4),
    ('Lead Salesman', 85.00, 1),
    ('Salesman', 70.50, 5),
    ('HR Admin', 54.00, 2),
    ('Technician', 85.50 ,3),
    ('Secretary', 33.00, 8);
    ('Sales Intern', 55.00, 7),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Amy', 'Adams', 1, NULL),
    ('Ben', 'Smith', , NULL),
    ('Carly', 'Doe', 2, NULL),
    ('Dave', 'Smith', 4, 258),
    ('Edward', 'Jones', 5, NULL),
    ('Frank', 'Hills', , NULL),
    ('Gianna', 'Pitt', , NULL),
    ('Emily', 'Bates', , NULL)