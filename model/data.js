const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    }
});

const Register = new mongoose.model("Register" , userSchema);

module.exports = Register;