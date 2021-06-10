const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const Register = require('./model/data');
require('dotenv').config();
const configDB = process.env.CONFIG;
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.set('view-engine', 'hbs');

// database connection
mongoose.connect(`mongodb://192.168.0.100/devaman`,
    // mongoose.connect(`https://'${configDB}'/devaman` ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('connected');
    }).catch((error) => {
        console.log(`database error found ${error}`);
    });

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.post('/', async (req, res) => {

    const createDocument = async () => {
        try {
            const registerUser = new Register({
                task: req.body.task
            });
            const registered = await registerUser.save();
            console.log(registered);

            res.status(201).send('sucess');

        } catch(error) {
            res.status(404).send(error);
        }
    };
    createDocument();

});

app.listen(port, () => {
    console.log('app is running on port 5000');
});