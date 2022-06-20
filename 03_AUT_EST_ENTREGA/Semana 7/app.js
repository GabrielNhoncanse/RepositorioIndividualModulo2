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

app.get('/getRenatoDelas', (req, res) => { //pegar experiencias do banco
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
});

app.post('/postExperiencia', (req, res) => { //Inserir experiencia
    res.statusCode = 200
    res.setHeader('Access-Control-Allow-Origin', '*')

    var db = new sqlite3.Database(DBPATH)
    var sql = `INSERT INTO Experiencia (Linha) VALUES (?)`;

    let parametro = [];
    parametro.push(req.body.Linha);

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err
        }
        res.send(JSON.stringify(rows))
    })
    db.close()
});

app.post('/updateExperiencia', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `UPDATE Experiencia SET Linha = ? WHERE id = ?`

    let parametro = [];
    parametro.push(req.body.Linha, req.body.id);
    db.all(sql, param, (err, rows) => {
        if (err) {
            throw err
        }
        res.json(rows)
    });
    db.close() // Fecha o banco
});

app.post('/deleteExperiencia', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `DELETE FROM Experiencia WHERE id = ?;`

    let param = [];
    param.push(req.body.id);

    db.all(sql, param, (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});