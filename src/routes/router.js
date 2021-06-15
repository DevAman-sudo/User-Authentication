const express = require('express');
const mongoose = require('mongoose');
const Register = require('../models/schema');
const bcrypt = require('bcryptjs');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
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

                // JWT auth tokens
                const token = await registerUser.generateAuthToken();

                // storing user cookie
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 600000),
                    httpOnly: true
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

        // comparing hashed password with user password
        const isMatch = await bcrypt.compare(password, userData.password);

        // JWT auth tokens
        const token = await userData.generateAuthToken();
        console.log(token);

        // storing user cookie
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 600000),
            httpOnly: true,
            // secure: true
        });

        if (isMatch) {
            res.status(201).send(userData);
        } else {
            res.send('password didnt matched');
        }

    } catch (error) {
        res.status(400).send('invalid login details');
        console.log(`error occured => ${error}`);
    }
});

// root user route
router.get('/login/root' , (req , res) => {
    res.send('logged in as root');
    console.log(req.cookies.jwt);
});


module.exports = router;