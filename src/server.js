// npm packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config( {
    path: path.join(__dirname, '/.env')});

// variables
const port = process.env.PORT || 5000;
const pass = process.env.PASS;

// express middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.set('view-engine', 'hbs');

// database connection
mongoose.connect(`mongodb+srv://DevAman:${pass}@cluster0.tlrz1.mongodb.net/helloworld?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('database connected');
    }).catch((error) => {
        console.log(`database error found ${error}`);
    });

// starting server
app.listen(port, async (error) => {
    if (error) {
        console.log(`error occured on listening on port ${port} => ${error}`);
    } else {
        console.log(`server running on port ${port}`);
    }
});