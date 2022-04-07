const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
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
    },
  });
  const patient = new mongoose.model("patient", userSchema);

module.exports = patient;

