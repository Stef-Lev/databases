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


//SHOW ALL EMPLOYEES WITH THEIR MANAGERS
let join1 = `
SELECT full_name AS 'employee', manager_name AS 'manager' 
FROM employees LEFT JOIN managers 
ON employees.manager_id=managers.manager_id
;`;

db.query(join1, (err, res) => {
    if (err) throw err;
    console.log(`Employee-Manager join done...`);
});


//SHOW ALL EMPLOYEES WITH DEPARTMENTS
let join2 = `
SELECT full_name AS 'employee', title AS 'department' 
FROM employees RIGHT JOIN departments 
ON employees.dept_no=departments.dept_no
;`;

db.query(join2, (err, res) => {
    if (err) throw err;
    console.log(`Employee-Department join done...`);
});

db.end();