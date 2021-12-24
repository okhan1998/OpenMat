const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.use(express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.get('/openmat/api', (req, res) => {
    res.send([
        {
            'img': 'https://images.squarespace-cdn.com/content/v1/53406330e4b0c7c09a3b7926/1575790977666-0ZBOSITFCUHW2XAP1JLR/new+mgd+2019+-+modded.jpg?format=1500w',
            'location': '경기 김포시 사우중로73번길 24 선일프라자',
            'title': '김포 골든라이언 주말 오픈맷',
            'description': '12월 4일 오후 5시 ~ 오후 7시. 화이트 2그랄 이상부터 참여가능',
            'star': '4.73',
            'price': '30,000원'
        }
    ])   
})


app.listen(port, () => console.log(`Listening on port ${port}`))