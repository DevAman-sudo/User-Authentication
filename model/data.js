const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Register = new mongoose.model("Register" , userSchema);

module.exports = Register;