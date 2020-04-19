
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company',
    multipleStatements: true

});

con.connect(err => {
    if (err) throw err;
    console.log('Connected');
});


let employees = `
CREATE TABLE IF NOT EXISTS Employees (
    emp_no int NOT NULL AUTO_INCREMENT,
    emp_name varchar(255),
    salary int,
    reports_to varchar(255),
    PRIMARY KEY (emp_no),
    UNIQUE (emp_no)
    );
INSERT INTO Employees (emp_no,emp_name,salary,reports_to) 
VALUES 
(1001,'Luis Guevara',12000,'Richard Clegg'),
(emp_no,'Kimberly Kumar',18000,'Richard Clegg'),
(emp_no,'Eiliyah Wang',12000,'Richard Clegg'),
(emp_no,'Thea Luna',16000,'Richard Clegg'),
(emp_no,'Oisin Holmes',14000,'Stefania Mullins'),
(emp_no,'Zoey Robinson',14000,'Richard Clegg'),
(emp_no,'Latisha Yang',12000,'Stefania Mullins'),
(emp_no,'Corrina Mejia',18000,'Richard Clegg'),
(emp_no,'Aryaan Lancaster',10000,'Stefania Mullins'),
(emp_no,'Rahim Turnbul',14000,'Stefania Mullins')
;
`;
let departments = `
CREATE TABLE IF NOT EXISTS Departments (
    dept_no int NOT NULL AUTO_INCREMENT,
    dept_name varchar(255),
    manager varchar(255),
    PRIMARY KEY (dept_no),
    UNIQUE (dept)
    );
INSERT INTO Departments (dept_no,dept_name,manager) 
    VALUES 
    (2201,'Engineering','Richard Clegg'),
    (dept_no,'HR','Stefania Mullins'),
    (dept_no,'Marketing','George Appleton'),
    (dept_no,'Accounts','Wilfred Fuentes'),
    (dept_no,'Server & Security','Tedd Dickinson'),
    (dept_no,'Operations','Ashlee Brown'),
    (dept_no,'Business Development','Anne McDonald'),
    (dept_no,'Admin','Reanne Walters'),
    (dept_no,'Media & Communication','Maverick Gomez'),
    (dept_no,'Purchase','Dominic Bradley')
    ;
`;
let projects = `
CREATE TABLE IF NOT EXISTS Projects (
    proj_no int NOT NULL AUTO_INCREMENT,
    proj_name varchar(255),
    starting_date date,
    ending_date date,
    PRIMARY KEY (proj_no),
    UNIQUE (proj_no)
    );
INSERT INTO Projects (proj_no,proj_name,starting_date,ending_date) 
    VALUES 
    (30001,'Gallius','2015-12-5','2015-12-30'),
    (proj_no,'Halogian','2016-1-1','2016-1-15'),
    (proj_no,'Jessa','2016-2-20','2016-2-27'),
    (proj_no,'Ponius','2016-3-12','2016-3-23'),
    (proj_no,'Ringer','2016-5-21','2016-5-30'),
    (proj_no,'Wilmes','2017-6-30','2017-7-4'),
    (proj_no,'Omous','2017-8-15','2017-8-31'),
    (proj_no,'Dromide','2018-6-19','2018-7-7'),
    (proj_no,'Cades','2018-11-16','2018-11-22'),
    (proj_no,'Arvek','2019-11-30','2019-12-9')
    ;
`;

con.query(employees, (err, res) => {
    if (err) throw err;
    console.log(`Table was created and row were inserted to the table!`);
});
con.query(departments, (err, res) => {
    if (err) throw err;
    console.log(`Table was created and row were inserted to the table!`);
});
con.query(projects, (err, res) => {
    if (err) throw err;
    console.log(`Table was created and row were inserted to the table!`);
})

con.end();
