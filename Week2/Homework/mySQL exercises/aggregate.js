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


//SHOW EMPLOYEES IN EACH DEPARTMENT
let agg1 = `
SELECT dept_no AS 'department',count(full_name) AS 'employees' 
FROM employees 
GROUP BY dept_no;
;`;

db.query(agg1, (err, res) => {
    if (err) throw err;
    console.log(`Task 1 done...`);
});

//SHOW SUM OF SALARIES
let agg2 = `
SELECT SUM(salary) AS 'total salary' FROM employees
;`;

db.query(agg2, (err, res) => {
    if (err) throw err;
    console.log(`Task 2 done...`);
});

//SHOW AVERAGE OF SALARIES
let agg3 = `
SELECT ROUND(AVG(salary),0) AS 'average salary' FROM employees
;`;

db.query(agg3, (err, res) => {
    if (err) throw err;
    console.log(`Task 3 done...`);
});

//SHOW SUM OF SALARIES PER DEPARTMENT
let agg4 = `
SELECT sum(salary) as 'total salary',title AS 'department' 
FROM employees JOIN departments 
ON employees.dept_no=departments.dept_no 
GROUP BY title
;`;

db.query(agg4, (err, res) => {
    if (err) throw err;
    console.log(`Task 4 done...`);
});

//SHOW MIN-MAX SALARY PER DEPARTMENT
let agg5 = `
SELECT MIN(salary) AS 'minimum salary',title AS 'department' 
FROM employees JOIN departments 
ON employees.dept_no=departments.dept_no 
GROUP BY title
;
SELECT MAX(salary) AS 'maximum salary',title AS 'department' 
FROM employees JOIN departments 
ON employees.dept_no=departments.dept_no 
GROUP BY title
;`;

db.query(agg5, (err, res) => {
    if (err) throw err;
    console.log(`Task 5 done...`);
});

//NUMBER OF EMPLOYEES PER SALARY
let agg6 = `
SELECT salary,count(full_name) AS 'number of employees' FROM employees GROUP BY salary;
;`;

db.query(agg6, (err, res) => {
    if (err) throw err;
    console.log(`Task 6 done...`);
});

db.end();