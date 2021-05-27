// node packages //
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./model/user');
const port = process.env.PORT || 5000;

// file_path //
const staticPath = path.join(__dirname , "/static/");

// app middleware`s //
app.use(express.static(staticPath));
app.use(bodyParser.json());

// Database Connection //
mongoose.connect(process.env.CONFIG , { useNewUrlParser: true , useUnifiedTopology: true } , () => {
    console.log('Connected to DB');
});

// app routes //
app.get('/' , (req , res) => {
    res.sendFile(path.join(staticPath , 'register.html'));
});

app.post('/api/register' , async (req , res) => {
    console.log(req.body);
    res.json({ status: 'ok' });
});

// listening to port //
app.listen(port , () => {
   console.log(`server running on port ${port}`); 
});