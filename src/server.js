// npm packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT || 5000;

// express middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.set('view-engine' , 'hbs');

// starting server
app.listen(port , async (error) => {
    if (error) {
        console.log(`error occured on listening on port ${port} => ${error}`);
    } else {
        console.log(`server running on port ${port}`);
    }
});