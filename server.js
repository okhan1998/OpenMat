const fs = require('fs');
const express = require('express');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

const port = process.env.PORT || 5000;
let connection = null;
app.use(cookieParser());
app.use(express.static('build'));
app.use(express.static('upload'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
const mysql = require('mysql');
if(port != 5000){
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


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/openmat', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/login', (req, res) => {
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

app.post('/login',  (req, res) => {
    let sql = 'select * from login where username = ?'
    let username = req.body.usernameReg;
    let password = req.body.passwordReg;
    let params = [username];
    connection.query(sql, params,
        async (err, rows, fields) => {
            if (err)
                res.send({err: err});

            if (rows.length ===0){
                res.send({message: 'username does not exist'})
            }
            else{
                
                if(await argon2.verify(rows[0].password, password)){
                    const access_token = jwt.sign({ username }, 'secure', {
                        expiresIn: 300
                    });
                    console.log(access_token);
                    res.cookie('access_token', access_token, {
                        httpOnly: true
                    });
                    res.send(rows)
                }
                else
                res.send({message: 'Wrong username/password combination!'})
                console.log(3);
            }
                
        })

})


app.post('/register', async (req, res) => {
    console.log(req.body);
    let sql = 'INSERT INTO login VALUES (null, ?, ?)';
    let username = req.body.usernameReg;
    let password = await argon2.hash(req.body.passwordReg);
    console.log(username, password);
    let params = [username, password];
    console.log(params);
    connection.query(sql, params,
        (err, rows, fields) => {
            console.log(rows);
            console.log(err);
        })

})


app.post('/openmat/api', upload.single('img'), (req, res) => {
    console.log(req.body);
    let sql = 'INSERT INTO gym VALUES (null, ?, ?, ?, ?, ?, ?, now(), 0)';
    let img = '/img/' + req.file.filename;
    let location = req.body.location;
    let title = req.body.title;
    let description = req.body.description;
    let star = req.body.star;
    let price = req.body.price; 
    let params = [img, location, title, description, star, price];
    // console.log(img, location, title, description, star, price);
    connection.query(sql, params, 
        (err, rows, fields) => {
            res.send(rows);
        }   
    );

})

app.delete('/openmat/api/:id', (req, res) => {
    const { access_token } = req.cookies;
    if(!access_token){
        res.status(401).send({message :'login이 필요합니다'})
    }
    
    try {
    const tokenusername = jwt.verify(access_token, 'secure').username;
    let tmpsql = 'select * from login where username = ?'
    connection.query(tmpsql, [tokenusername],
        (terr, row, field) => {
            if (!(row[0].username == tokenusername)){
                throw '맞는 userinfo가 없습니다';
            }
                let sql = 'UPDATE gym SET isDeleted = 1 WHERE id = ?';
                let params = [req.params.id];
                connection.query(sql, params,
                (err, rows, fields) => {
                    res.send({message: '삭제되었습니다'});
                })
            
        })
    }
    catch {
        res.status(401).send({message:'login이 필요합니다'})
    }
  })


app.listen(port, () => console.log(`Listening on port ${port}`))