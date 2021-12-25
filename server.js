const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
let connection = null;
app.use(express.static('build'));
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


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/openmat/api', (req, res) => {
    connection.query(
        'SELECT * FROM gym',
        (err, rows, fields) => {
            res.send(rows);
        }
    );
})


app.listen(port, () => console.log(`Listening on port ${port}`))