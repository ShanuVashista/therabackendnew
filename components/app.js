const express = require("express")
require('dotenv').config()
const app = express();
const signup = require("../routes/signup")
const login = require("../routes/login")
const hello= require('../routes/hello')
const appointment = require("../routes/appointment")
const get_patientByDoctorID = require("../routes/get_patientByDoctorID")
const get_patients = require("../routes/get_patients")
const PORT = process.env.PORT 
const HOST = process.env.HOST
const db = require('../components/db')




app.use(express.json());
app.use(express.urlencoded());

app.use(hello)
app.use(signup);
app.use(login);
app.use(appointment)
app.use(get_patientByDoctorID)
app.use(get_patients)



app.listen(PORT,HOST,()=>{
  console.log(`https://${HOST}:${PORT}`);
})
