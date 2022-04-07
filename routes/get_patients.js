const express = require("express");
const res = require("express/lib/response");
// const mongoose = require("mongoose");
const router = express.Router()
const apt = require('../Models/appointment_schema')

router
   .route('/getpatients')
   .get((req, resp) => {

      apt.find((req, res) => {
         const patient = [];
         res.forEach(e => {
            const Obj ={
               patientID:e.patientID,
               doctorID:e.doctorID,
               date:e.date,
               time:e.time,
               aptType:e.aptType
            }
            
            patient.push(Obj)
         });

         resp.json({ mssg: "data retireved successfully", Data: patient })

      })
   })

module.exports = router