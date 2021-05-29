// npm packages
const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 5000;
const Register = require('./models/register');

// app middleware
app.set('view-engine' , 'hbs');
app.use(express.json());
app.use( express.urlencoded({ extended: true }) );

// mongodb database connection
mongoose.connect(`${process.env.CONFIG}/devdb` , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},
() => {
    console.log('connected to DB');
});

// app routes
app.get('/' , (req , res) => {
    res.send(`<a href="/register">welcome to the home page</a>`);
});

app.get('/register' , (req , res) => {
    res.render('register.hbs');
});

app.post('/register' , async (req , res) => {
    try {
        
        const password = req.body.password;
        const Cpassword = req.body.confirmpassword;
        
        if (password == Cpassword) {
            
            const registerUser = new Register({
                username: req.body.username,
                email: req.body.email,
                password: password,
                confirmpassword: Cpassword
            });
            res.send('SUCCESS');
            
        } else {
            res.send('password didn`t matched');
        }
        
    } catch(error) {
        res.status(404).send(error);
    }
});

// listening to app
app.listen(port , () => {
    console.log(`server listening on port ${port}`);
});