const express = require("express");
const mysql = require('mysql2');
const app = express();

const PORT = process.env.PORT || 3000

const db = mysql.createConnection({
    host:'localhost',
    user:'Root',
    password:'',
    database:'fogado'
});

db.connect(err => {
    if (err) throw err;
    console.log('connected');
})

app.get('/szobak', (req, res) => {
    const sql = 'SELECT szobak.sznev, agy, potagy FROM szobak;';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("sql error:", err);
            return res.status(500).send('database error');
        }
        res.json(results);
    });
});

app.get('/szobak', (req, res) => {
    const sql = 'SELECT szobak.sznev, agy, potagy FROM szobak;';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("sql error:", err);
            return res.status(500).send('database error');
        }
        res.json(results);
    });
});

app.get('/szobak', (req, res) => {
    const sql = 'SELECT szobak.sznev, agy, potagy FROM szobak;';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("sql error:", err);
            return res.status(500).send('database error');
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`server running at HTTP://localhost:${PORT}`)
});