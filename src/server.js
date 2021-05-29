// npm packages
const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;

// app middleware
app.set('view-engine' , 'hbs');
app.use(express.json());

// app routes
app.get('/' , (req , res) => {
    res.send('welcome to the home page');
});

app.get('/register' , (req , res) => {
    res.render('register');
});

app.post('/register' , async (req , res) => {
    try {
        
    } catch(error) {
        res.status(404).send(error);
    }
});

// listening to app
app.listen(port , () => {
    console.log(`server listening on port ${port}`);
});