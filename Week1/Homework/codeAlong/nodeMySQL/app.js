const express = require('express');
const mysql = require('mysql');
let port = 3000;

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'nodemysql',
    multipleStatements: true
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...')
})


const app = express();

app.get('/createdb', (req, res) => {
    let sql = 'create database nodemysql';
    db.query(sql, (err, res) => {
        if (err) throw err;
        res.send('Database created...')
    });
})

app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts (id int auto_increment,title varchar(255),body varchar(255),primary key(id))';
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.log(res);
        res.send('Table created...');
    })
})

app.get('/addpost1', (req, res) => {
    let post = { title: 'Post', body: 'This is post one' };
    let sql = 'INSERT INTO posts SET?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts fetched...');
    });
});

app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated title';
    let sql = `UPDATE posts SET title=${newTitle} WHERE id=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated title';
    let sql = `DELETE FROM posts WHERE id=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});


app.listen(port, () => console.log('Server running!'))
