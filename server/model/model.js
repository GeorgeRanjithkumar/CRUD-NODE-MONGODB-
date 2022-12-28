const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    lastname : {
        type : String
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    role : String,
    address : String,
    phone :Number ,
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;