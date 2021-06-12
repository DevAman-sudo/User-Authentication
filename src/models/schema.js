const mongoose = require('mongoose');

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
        maximun: 255
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minimun: 8,
        maximun: 255
    },
    confirmpassword: {
        type: String,
        required: true,
        trim: true,
        minimun: 8,
        maximun: 255
    }
    
});

const Register = new mongoose.model("Register" , userSchema);

module.exports = Register;