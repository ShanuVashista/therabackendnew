const express = require("express");
const mongoose = require("mongoose");
const log = require("../Models/login_schema");
const users = require("../Models/signup_schema");
const router = express.Router()


router 
    .route('/login')
    .post((req, res) => {
            const { email, password } = req.body;
             users.findOne({ email: email }, (err, user) => {
              if (user) {
                if (password === user.password) {
                    var rdm = function() {
                        return Math.random().toString(36).substr(2); // remove `0.`
                    };
                    var token = function() {
                        return rdm() + rdm() + rdm()+ rdm()+ rdm()+ rdm(); // to make it longer
                    };
                   let myToken= token();
                  //  console.log(myToken);
                   log.create({
                       email: email,
                       token: myToken
                   })
                    // console.log(myToken);
                  res.send({ message: "Login Successfull", token_id: myToken });
                } else {
                  res.send({ message: "Password Did't Match" });
                }
              } else {
                res.send({
                  message: "Not registered Please Fill Currect Email Or Password",
                });
              }
            });
          });
module.exports= router 