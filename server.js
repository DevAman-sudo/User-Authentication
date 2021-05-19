const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const hbs = require('hbs');
const path = require('path');
const chalk = require('chalk');
const admin = require("firebase-admin");
require('dotenv').config();

const staticPath = path.join(__dirname, '/public/');
const viewsPath = path.join(__dirname, '/views/');

// To Set The View Engine
app.set('view engine', 'hbs');
app.set("views", viewsPath);

app.use(express.static(staticPath));

// Firebase Admin //
var serviceAccount = path.join(__dirname , "config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// App Routes //
app.get('/', (req, res) => {
    res.render('signup');
});

app.listen(port, () => {
    console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});