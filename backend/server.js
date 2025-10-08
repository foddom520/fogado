const express = require("express");
const mysql = require('mysql2');
const app = express();
import 

const PORT = process.env.PORT || 3000

const db = mysql.createConnection({
    host:process.env.host || 'localhost',
    user: process.env.user || 'root',
    password: process.env.password || '',
    database: process.env.database || 'fogado'
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

app.get('/fogalalsok', (req, res) => {
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