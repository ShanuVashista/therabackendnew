const express = require("express");
const { body } = require("express-validator");
const mongoose = require("mongoose");
const router = express.Router()
const apt= require('../Models/appointment_schema')
const log= require('../Models/login_schema')
const {success, wrapRequestHandler} = require('../helpers/response');
const {validate} = require("../helpers/validation");
// let num = 1;

const handler = async(req,res)=>{
    const {doctorID, time, date, aptType,email, patientID, token, user_id} = req.body;

    // const appoin = await log.findOne({where:{email: email}});
    const appoin = await apt.create({
        patientID,
        doctorID,
        time, 
        date,
        aptType,
        email,
        token,
        user_id

    });
    
    return res.json(success("successfully generated your appointment", appoin))
}
router.post("/appointment", validate([
    body("email").notEmpty().withMessage("email is require"),
    body("doctorID").notEmpty().withMessage("doctorID is require"),
    body("patientID").notEmpty().withMessage("patientID is require"),
    body("aptType").notEmpty().withMessage("aptType is require"),
]), wrapRequestHandler(handler)); 














// router.post((req,response)=>{
//         try {
//             const {doctorID, time, date, aptType,email}= req.body;
//             console.log(email);
//             log.findOne({email: email}, (err, res)=>{
//                 console.log(email);
//                 if(email!==undefined|| email!==null){
//                     let _id= res._id
//                     let token = res.token
//                     patientID = "PATIENT"+Math.ceil(Math.random()*10000)
//                     console.log(_id);
//                     apt.create({
//                         patientID, doctorID, time, date, aptType,token, user_id:_id});
//                     response.json({mssg: `Appointment Booked Successfully ${patientID}`})
//                 }else {response.send("failed")}
//             })
//         } catch (error) {
//             response.send(error)
//         }
       
//     })
//     .route('/appointment')




    module.exports= router