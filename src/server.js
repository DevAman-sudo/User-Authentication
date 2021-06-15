// npm packages
require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const hbs = require('hbs');
const validator = require('validator');
const cookieParser = require('cookie-parser');

// variables
const port = process.env.PORT || 5000;
const pass = process.env.PASS;

// FilePath`s ...
const staticPath = path.join(__dirname , '../public/');

// express middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.set('view-engine', 'hbs');
app.use(express.static(staticPath));

// database connection
// mongoose.connect('mongodb://192.168.0.100/helloworld',
mongoose.connect(`mongodb+srv://DevAman:${pass}@cluster0.tlrz1.mongodb.net/helloworld?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log('database connected');
    }).catch((error) => {
        console.log(`database error found ${error}`);
    });
    
// app routes
const Router = require('./routes/router');
app.use(Router);

// starting server
app.listen(port, async (error) => {
    if (error) {
        console.log(`error occured on listening on port ${port} => ${error}`);
    } else {
        console.log(`server running on port ${port}`);
    }
});