const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const hbs = require('hbs');
const path = require('path');
const chalk = require('chalk');
const mysql = require('mysql');
require('dotenv').config();

const staticPath = path.join(__dirname, '/public/');
const viewsPath = path.join(__dirname, '/views/');

// To Set The View Engine
app.set('view engine', 'hbs');
app.set("views", viewsPath);

app.use(express.static(staticPath));

// MySql Database //
const connection = mysql.createConnection({
    host: 'b7611sz6ocjvqhcpjajb-mysql.services.clever-cloud.com',
    user: 'uf1yomiwxhhdle30',
    password: 'exQAhKHjekNN77NYzDzL',
    database: 'b7611sz6ocjvqhcpjajb'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

// App Routes //
app.get('/', (req, res) => {
    res.render('signup');
});

app.listen(port, () => {
    console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});