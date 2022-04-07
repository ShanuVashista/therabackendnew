const express = require("express");
const mongoose = require("mongoose");
const users = require("../Models/signup_schema")
const doctor = require("../Models/doctor_schema")
const patient = require("../Models/patient_schema")
const log = require("../Models/login_schema");
const router = express.Router()



router
  .route('/signup')
  .post(("/signup",  (req, res) => {
  // console.log(req.body)
  const {userType, firstName,lastName,email , password ,confirmPassword} = req.body
  if(password!==confirmPassword){
    res.send("Password and Confirm Password must be same")
  }else{
  const Info = new users({
    userType,
    firstName,
    lastName,
    email,
    password,
  })
  const patients = new patient({
    firstName,
    lastName,
    email,
    password,
   
  })
  const doctors = new doctor({

    firstName,
    lastName,
    email,
    password,
   
  })
  Info.save(err =>{
    if(err){
      res.send("err")
    }
  })
  if(userType == 0){
    patients.save(err =>{
      res.send(err)
    })
  }else if(userType == 1){
    doctors.save(err =>{
      res.send(err)
    })
  }else{
    res.send({message: "data not Added to the Database"})
  }
  
  }}));




module.exports = router;