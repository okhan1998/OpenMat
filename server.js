const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
let connection = null;
app.use(express.static('build'));
app.use(express.static('upload'));
const mysql = require('mysql');
if(port != 5001){
    connection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        port: process.env.port,
        database: process.env.database
    });
    connection.connect();
}else {
    const data = fs.readFileSync('./database.json')
    const conf = JSON.parse(data);
    connection = mysql.createConnection({
        host: conf.host,
        user: conf.user,
        password: conf.password,
        port: conf.port,
        database: conf.database
    });
    connection.connect();
}
const multer = require('multer');
const upload = multer({dest: './upload'})


app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/openmat/api', (req, res) => {
    connection.query(
        'SELECT * FROM gym where isDeleted = 0',
        (err, rows, fields) => {
            res.send(rows);
        }
    );
})

app.use('/img', express.static('./upload'));

app.post('/openmat/api', upload.single('img'), (req, res) => {
    let sql = 'INSERT INTO gym VALUES (null, ?, ?, ?, ?, ?, ?, now(), 0)';
    let img = '/img/' + req.file.filename;
    let location = req.body.location;
    let title = req.body.title;
    let description = req.body.description;
    let star = req.body.star;
    let price = req.body.price;
    let params = [img, location, title, description, star, price];
    console.log(img, location, title, description, star, price);
    connection.query(sql, params, 
        (err, rows, fields) => {
            res.send(rows);
        }   
    );

})

app.delete('/openmat/api/:id', (req, res) => {
    let sql = 'UPDATE gym SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
      (err, rows, fields) => {
        res.send(rows);
      }
      )
  })


app.listen(port, () => console.log(`Listening on port ${port}`))