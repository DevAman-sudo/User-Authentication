const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const Register = require('./model/data');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname , '/public')));
app.use(express.json());
app.use( express.urlencoded({ extended: true }) );
app.set('view-engine' , 'hbs');

// database connection
mongoose.connect('mongodb://192.168.0.100/devaman' ,
{ useNewUrlParser: true ,
  useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(`database error found => ${err}`);
    } else {
        console.log('connected');
    }
});

app.get('/' , (req , res) => {
    res.render('index.hbs');
});

app.post('/' , async (req , res) => {
    try {
        
        const registerUser = new Register({
            task: req.body.task
        });
        const registered = registerUser.save();
        
        res.status(201).send('sucess');
        
    } catch(error) {
        res.status(404).send(error);
    }
});

app.listen(port , () => {
    console.log('app is running on port 5000');
});