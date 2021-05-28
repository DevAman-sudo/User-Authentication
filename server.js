// node packages //
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;

// file_path //
const staticPath = path.join(__dirname , "/static/");

// app middleware`s //
app.set('view-engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(staticPath));

// app routes //
app.get('/' , (req , res) => {
    res.render('register.hbs');
});

app.post('/' , (req , res) => {
    res.redirect('register.hbs');
});

// listening to port //
app.listen(port , () => {
   console.log(`server running on port ${port}`); 
});