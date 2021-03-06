const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    firstName:{
       type:String,
    },
   lastName:{
        type:String,
    },
    email :{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    date:{
        type:Date,
        default: Date.now
    }
   
});

module.exports = User = mongoose.model("users", UserSchema)