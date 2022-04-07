const express = require("express");
const router = express.Router();
const apt = require("../Models/appointment_schema");

router
    .route("/get_patients")
    .get((req,resp)=>{
        const {doctorID} = req.body;
        apt.find({doctorID:doctorID}, (err, res)=>{
            // const {patientID,date,time,aptType} = res
            if(res){
                // console.log(res);
                const patients= [];
               res.forEach((a) => {
                   const obj ={
                    patientID:a.patientID,
                    date:a.date,
                    time:a.time,
                    aptType:a.aptType
                   }
                patients.push(obj);
               });
                // console.log(patients);
                resp.send(patients);
            }else{
                res.send({msg:"No Appointment Booked"})
            }
        })
    })

module.exports= router;