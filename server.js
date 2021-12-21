const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.get('/openmat', (req, res) => {
    res.send({message: 'Hello Express!'})   
})


app.listen(port, () => console.log(`Listening on port ${port}`))