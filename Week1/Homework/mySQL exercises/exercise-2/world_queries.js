const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'world',
    multipleStatements: true

});

con.connect(err => {
    if (err) throw err;
    console.log('Connected');
});

con.query(`
SELECT name FROM country WHERE population > 8000000;
SELECT name FROM country WHERE name LIKE '%land%';
SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000;
SELECT name FROM country WHERE continent='europe';
SELECT name,surfaceArea FROM country ORDER BY surfaceArea DESC;
SELECT name,countryCode FROM city WHERE countryCode='NLD';
SELECT name,population FROM city WHERE name='Rotterdam';
SELECT name,surfaceArea FROM country ORDER BY surfaceArea DESC LIMIT 10;
SELECT name,population FROM city ORDER BY population DESC LIMIT 10;
SELECT SUM(population) as 'world_population' FROM country;
`, (err, res) => {
    if (err) throw err;
    console.log(`Query completed`);
})

con.end();