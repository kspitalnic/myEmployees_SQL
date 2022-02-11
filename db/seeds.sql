INSERT INTO department (name)
VALUES
    ('Sales'),
    ('HR'),
    ('IT'),
    ('Management'),

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 100.00, 4),
    ('Lead Salesman', 85.00, 1),
    ('Salesman', 70.50, 1),
    ('HR Admin', 54.00, 2),
    ('Technician', 85.50, 3),
    ('Secretary', 33.00, 2);
    ('Sales Intern', 55.00, 1),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Amy', 'Adams', 2, 4),
    ('Ben', 'Smith', 3, 4),
    ('Carly', 'Doe', 4, 4),
    ('Dave', 'Smith', 1, NULL),
    ('Edward', 'Jones', 5, NULL),
    ('Frank', 'Hills', 3, 4),
    ('Gianna', 'Pitt', 7, 4),
    ('Emily', 'Bates', 6, 4)