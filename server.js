const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname , '/public')));
app.use(express.json());
app.use( express.urlencoded({ extended: true }) );
app.set('view-engine' , 'hbs');

app.get('/' , (req , res) => {
    res.render('index.hbs');
});

app.post('/' , (req , res) => {
    console.log(req.body);
    
    res.send('ok');
});

app.listen(port , () => {
    console.log('app is running on port 5000');
});