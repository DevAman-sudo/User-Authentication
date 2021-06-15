const jwt = require('jsonwebtoken');
const Register = require('../models/schema');

const auth = async (req, res, next) => {
    try {

        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.JWT_KEY);
        console.log(verifyUser);
        next();

    } catch (error) {
        res.status(400).send(`middleware auth error => ${error}`);
    }
};

module.exports = auth;