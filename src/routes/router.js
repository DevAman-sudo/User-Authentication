const express = require('express');
const mongoose = require('mongoose');
const Register = require('../models/schema');
const hbs = require('hbs');
const router = express();

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
                console.log(registered);

                res.status(201).send('sucess');
            } else {
                res.status(201).send('password didn`t matched');
            }

        } catch(error) {
            res.status(404).send(error);
        }
    };
    createDocument();

});

module.exports = router;