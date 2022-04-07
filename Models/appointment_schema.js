const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    patientID: {
        type: String,
        required: true,
        unique: true
    },
    doctorID:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    aptType:{
        type: String,
        required: true
    },
    token:{
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    }
  });
  const apt = new mongoose.model("appointment", userSchema);

module.exports = apt;

