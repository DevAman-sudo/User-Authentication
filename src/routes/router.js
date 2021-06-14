const express = require('express');
const mongoose = require('mongoose');
const Register = require('../models/schema');
const bcrypt = require('bcryptjs');
const hbs = require('hbs');
const router = express();


// signup routes
router.get('/', (req, res) => {
    res.render('index.hbs');
});

router.post('/signup', (req, res) => {

    const createDocument = async () => {
        try {
            const Password = req.body.password;
            const Confirm_password = req.body.confirm_password;

            if (Password == Confirm_password) {
                const registerUser = new Register({
                    username: req.body.username,
                    email: req.body.email,
                    password: Password,
                    confirm_password: Confirm_password
                });
                const registered = await registerUser.save();

                res.status(201).render('login.hbs');
            } else {
                res.status(201).send('password didn`t matched');
            }

        } catch(error) {
            res.status(400).send(error);
        }
    };
    createDocument();

});


// login routes
router.get('/login', (req, res) => {
    res.render('login.hbs');
});

router.post('/login', async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const userData = await Register.findOne({
            email: email
        });
        const isMatch = await bcrypt.compare(password , userData.password);

        if ( isMatch ) {
            res.status(201).send(userData);
        } else {
            res.send('password didnt matched');
        }

    } catch (error) {
        res.status(400).send('invalid login details');
        console.log(`error occured => ${error}`);
    }
});


module.exports = router;