const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    // doctor = 1 and patient = 0
    userType:{
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true},
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
  });
  const users = new mongoose.model("signUp", userSchema);

module.exports = users;

