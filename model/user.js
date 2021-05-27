const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {type: String , required: true , unique: true},
    email : {type: String , required: true},
    password : {type: String , required: true},
}, {collection: 'users'});

const model = mongoose.model('userSchema', userSchema);

model.exports = model;