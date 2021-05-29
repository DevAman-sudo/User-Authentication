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
    res.send(`<a href="/register">welcome to the home page</a>`);
});

app.get('/register' , (req , res) => {
    res.render('register.hbs');
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