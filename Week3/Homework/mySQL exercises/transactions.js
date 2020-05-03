
function flatify(dept_no, emp_no) {

    const mysql = require('mysql');


    const db = mysql.createConnection({
        host: 'localhost',
        user: 'hyfuser',
        password: 'hyfpassword',
        database: 'company',
        multipleStatements: true
    });

    db.connect(err => {
        if (err) throw err;
        console.log('Connected');
    });

    let newManager = `
    START TRANSACTION;

    SET @employee := (SELECT emp_name FROM employees WHERE emp_no=${emp_no});
    UPDATE departments
    SET manager=@employee
    WHERE dept_no=${dept_no};
    
    UPDATE EMPLOYEES
    SET reports_to=@employee;

    COMMIT;
    `;

    db.query(newManager, (err, res) => {
        if (err) throw err;
        console.log(`Manager updated...`);
    });

    db.end();

}
//Function test
flatify(2202, 1002);