const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'DataBase.db';

const hostname = '127.0.0.1';
const port = 3201;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/getRenatoDelas', (req, res) => {
    res.statusCode = 200
    res.setHeader('Access-Control-Allow-Origin', '*')

    var db = new sqlite3.Database(DBPATH)
    var sql = `SELECT * FROM Experiencia`

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err
        }
        res.send(JSON.stringify(rows))
    })
    db.close()
})