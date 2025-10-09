const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3000;
require('dotenv').config();

app.use(cors());

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

app.get('/foglalasok-reszletek', (req, res) => {
    const sql = 'SELECT vendegek.vnev, foglalasok.szoba, foglalasok.erk, foglalasok.tav FROM foglalasok AS foglalasok JOIN vendegek AS vendegek ON foglalasok.vendeg = vendegek.vsorsz;';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("sql error:", err);
            return res.status(500).send('database error');
        }
        res.json(results);
    });
});

app.get('/kihasznaltsag', (req, res) => {
    const sql = `
        SELECT 
            szoba,
            COUNT(szoba) AS foglalasok_szama,
            SUM(DATEDIFF(tav, erk)) AS osszes_ejszaka
        FROM foglalasok 
        GROUP BY szoba
    `;
    
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