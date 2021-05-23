const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'hbs');

const users = [];

app.get('/' , (req , res) => {
    res.render('index');
});

app.get('/login' , (req , res) => {
    res.render('login');
});

app.post('/login' , (req , res) => {
    
});

app.get('/register' , (req , res) => {
    res.render('register');
});

app.post('/register' , (req , res) => {
    
});

app.listen(port , () => {
    console.log('app listening on port 5000');
});