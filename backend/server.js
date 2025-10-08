const express = require("express");
const mysql = require('mysql2');
const app = express();
const PORT = 3000;
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
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

app.get('/ejszakak', (req, res) => {
    const sql = 'SELECT SUM(foglalasok.fo) AS vendegek FROM foglalasok;';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("sql error:", err);
            return res.status(500).send('database error');
        }
        res.json(results);
    });
});

app.get('/fogalalsok', (req, res) => {
    const sql = 'SELECT DATEDIFF(foglalasok.tav, foglalasok.erk) as vendegejszakak FROM foglalasok;';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("sql error:", err);
            return res.status(500).send('database error');
        }
        res.json(results);
    });
});

app.get('/fogalalsok', (req, res) => {
    const sql = 'SELECT vendegek.vnev, foglalasok.szoba, foglalasok.erk, foglalasok.tav FROM foglalasok AS foglalasok JOIN vendegek AS vendegek ON foglalasok.vendeg = vendegek.vsorsz;';
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