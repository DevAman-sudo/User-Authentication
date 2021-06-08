const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname , '/public')));
app.use(express.json);
app.set('view-engine' , 'html');

app.listen(port , () => {
    console.log('app is running on port 5000');
});