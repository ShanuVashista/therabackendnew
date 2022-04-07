const express = require("express")
const app = express();
const signup = require("../routes/signup")
const login = require("../routes/login")
const appointment = require("../routes/appointment")
require('dotenv')
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'
const db = require('../components/db')




app.use(express.json());
app.use(express.urlencoded());
app.use(signup);
app.use(login);
app.use(appointment)


app.listen(PORT,HOST,()=>{
  console.log(`https://${HOST}:${PORT}`);
})
