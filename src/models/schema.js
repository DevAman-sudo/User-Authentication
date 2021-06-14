require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

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
        maximun: 25
    },
    date: {
        type: Date,
        default: Date.now
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
    
});

// generating auth token middleware
userSchema.methods.generateAuthToken = async function () {
    try {
        
        const token = jwt.sign({ _id : this._id.toString() } , process.env.JWT_KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
        
    } catch (error) {
        res.send(error);
        console.log(`Error occured while generating jwt => ${error}`);
    }
};

// hashing password middleware
userSchema.pre("save" , async function() {
    
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password , 10);
        this.confirm_password = await bcrypt.hash(this.confirm_password , 10);
    }
    
});

const Register = new mongoose.model("Register" , userSchema);

module.exports = Register;