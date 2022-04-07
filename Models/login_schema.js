const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({

    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type: String,
        required: true,
        
    }
  });
  const log = new mongoose.model("login", userSchema);

module.exports = log;

