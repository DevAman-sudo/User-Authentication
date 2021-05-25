const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;

// connect to DB //
mongoose.connect(process.env.CONFIG ,
{ useNewUrlParser: true },
() => {
    console.log('connected to DB');
});

// Routes //
const authRoutes = require('./routes/auth');

// route middleware //
app.use('/api/user', authRoutes);

app.listen(port , () => {
    console.log('server running on port 5000');
});