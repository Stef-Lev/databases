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

//CREATE TABLE
let table = `
    CREATE TABLE IF NOT EXISTS departments (
    dept_no INT NOT NULL AUTO_INCREMENT UNIQUE,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    address VARCHAR(255),
    PRIMARY KEY(dept_no))
    ;`;

db.query(table, (err, res) => {
    if (err) throw err;
    console.log(`Table created...`);
});

//ADD DEPARTMENTS
let deps = `INSERT INTO departments (dept_no,title,description,address) VALUES
(301,'Marketing','Marketing department','79 North Market Ave.'),
(dept_no,'IT','Information Technology','9592 North Swanson Street'),
(dept_no,'HR','Human Resources','426 Amerige Street'),
(dept_no,'Ops','Operations','7108 Hawthorne Street')
;`;

db.query(deps, (err, res) => {
    if (err) throw err;
    console.log(`Departments added...`);
});

//ADD DEPARTMENTS COLUMN IN EMPLOYEES
let depEmpl = `ALTER TABLE employees
ADD COLUMN dept_no INT AFTER manager_id
;`;

db.query(depEmpl, (err, res) => {
    if (err) throw err;
    console.log(`Table changed...`);
});

//ADD RANDOM DEPARTMENTS IN EACH EMPLOYEE WITH A LOOP
let depNums = [301, 302, 303, 304];

for (let i = 1000; i < 1020; i++) {
    db.query(`
    UPDATE employees SET dept_no='${depNums[Math.floor(Math.random() * depNums.length)]}' WHERE employee_no=${i}
    ;`, (err, res) => {
        if (err) throw err;
        console.log(`Manager for employee ${i} added...`);
    });
}

//SETTING DEP_NO AS A FOREIGN KEY

let addFkey = `ALTER TABLE employees
ADD CONSTRAINT fk_dept FOREIGN KEY (dept_no) REFERENCES departments(dept_no)
;`;

db.query(addFkey, (err, res) => {
    if (err) throw err;
    console.log(`Foreign key set...`);
});

db.end();