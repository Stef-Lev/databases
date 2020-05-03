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


//CREATE TABLE SKILLS
let skills = `
    CREATE TABLE IF NOT EXISTS skills (
    skill_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    skill_name VARCHAR(255) NOT NULL)
    ;`;

db.query(skills, (err, res) => {
    if (err) throw err;
    console.log(`Table "Skills" created...`);
});

//CREATE TABLE EMPLOYEE SKILL SET
let skillset = `
    CREATE TABLE IF NOT EXISTS employee_skillset (
    emp_no INT,
    skill_id INT,
    PRIMARY KEY (emp_no,skill_id),
    FOREIGN KEY (emp_no) REFERENCES employees(emp_no),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
    );`;

db.query(skillset, (err, res) => {
    if (err) throw err;
    console.log(`Table "Employee Skill Set" created...`);
});

//ADD SKILLS
let addSkills = `
    INSERT INTO skills (skill_id,skill_name) VALUES
    (300,'Database management'),
    (skill_id,'Front end engineering'),
    (skill_id,'Back end engineering'),
    (skill_id,'UI-UX designing'),
    (skill_id,'Software testing')
    ;`;

db.query(addSkills, (err, res) => {
    if (err) throw err;
    console.log(`Skills added...`);
});

//ADD SKILL SETS
let addSkillsets = `
    INSERT INTO employee_skillset (emp_no,skill_id) VALUES
    (1001,300),
    (1002,302),
    (1002,304),
    (1003,301),
    (1003,304),
    (1004,301),
    (1005,304),
    (1005,301),
    (1006,302),
    (1006,303),
    (1007,303),
    (1007,301),
    (1008,304),
    (1009,300),
    (1009,301),
    (1009,302),
    (1009,303),
    (1009,304),
    (1010,300),
    (1010,302)
    ;`;

db.query(addSkillsets, (err, res) => {
    if (err) throw err;
    console.log(`Employees skill set added...`);
});

db.end();