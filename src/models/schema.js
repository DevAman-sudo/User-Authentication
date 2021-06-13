const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        trim: true,
        minimun: 2,
        maximun: 32
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maximun: 255,
        validate(value) {
            if ( !validator.isEmail(value) ) {
                throw new Error("Email is Invalid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minimun: 8,
        maximun: 255
    },
    confirm_password: {
        type: String,
        required: true,
        trim: true,
        minimun: 8,
        maximun: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

const Register = new mongoose.model("Register" , userSchema);

module.exports = Register;