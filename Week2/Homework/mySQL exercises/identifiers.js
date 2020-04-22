const mysql = require('mysql');
const mysqldump = require('mysqldump');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'week2homework',
    multipleStatements: true
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected');
});

//CREATE TABLE MANAGERS
let manTable = `CREATE TABLE IF NOT EXISTS managers (
    manager_id INT NOT NULL AUTO_INCREMENT UNIQUE,
    manager_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(manager_id))
    ;`;

db.query(manTable, (err, res) => {
    if (err) throw err;
    console.log(`Table created...`);
});

//ADD MANAGERS
let managers = `INSERT INTO managers (manager_id,manager_name) VALUES
(1,'Lindsey Thornton'),
(manager_id,'Shelley Harrington'),
(manager_id,'Clark Shears'),
(manager_id,'Christie Young')
;`;

db.query(managers, (err, res) => {
    if (err) throw err;
    console.log(`Managers added...`);
});

//CREATE TABLE EMPLOYEES
let emplTable = `CREATE TABLE IF NOT EXISTS employees (
    employee_no INT NOT NULL AUTO_INCREMENT UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    salary INT,
    address VARCHAR(255),
    manager_id INT NOT NULL,
    PRIMARY KEY(employee_no),
    FOREIGN KEY(manager_id) REFERENCES managers(manager_id))
    ;`;

db.query(emplTable, (err, res) => {
    if (err) throw err;
    console.log(`Table created...`);
});

//ADD EMPLOYEES
let employees = `INSERT INTO employees (employee_no,full_name,salary,address,manager_id) VALUES
(1000,'Farah Krueger',20000,'8552 Poor House Court',1),
(employee_no,'Lacey-Mai Harmon',18000,'15 Pennington Street',1),
(employee_no,'Alaya Edwards',22000,'307 Wild Rose Drive',4),
(employee_no,'Shaunie Almond',20000,'59 Charles Drive',4),
(employee_no,'Lily-May Gilmore',20000,'343 Tarkiln Hill Ave.',4),
(employee_no,'Regan Conner',16000,'8227 Arrowhead St.',3),
(employee_no,'Baxter Palmer',14000,'81 S. Canterbury St.',2),
(employee_no,'Aurora Saunders',12000,'22 Alderwood Court',3),
(employee_no,'Aiesha Good',20000,'441 High Noon Rd.',2),
(employee_no,'Shaun Blevins',18000,'7407 Woodsman St.',4),
(employee_no,'Renesmee Neale',22000,'8300 Thorne St.',1),
(employee_no,'Nusaybah Ramsay',24000,'487 Pine Avenue',3),
(employee_no,'Elyas Ortiz',16000,'391 Colonial St.',2),
(employee_no,'Fearne Gentry',12000,'8218 Peachtree Street',1),
(employee_no,'Amelia Carrillo',18000,'45 Church Street',2),
(employee_no,'Kezia Andrew',12000,'815 Shady Street',4),
(employee_no,'Tiegan Atkins',12000,'9635 Airport Rd.',3),
(employee_no,'Fern Rawlings',14000,'37 Tallwood Street',1),
(employee_no,'Finnley Osborn',16000,'83 Hickory Drive',2),
(employee_no,'Florrie Mercer',22000,'9 Bay Meadows Ave.',2)
;`;

db.query(employees, (err, res) => {
    if (err) throw err;
    console.log(`Employees added...`);
});

mysqldump({
    connection: {
        host: 'localhost',
        user: 'hyfuser',
        password: 'hyfpassword',
        database: 'week2homework',
    },
    dumpToFile: './dump.sql',
});

db.end();