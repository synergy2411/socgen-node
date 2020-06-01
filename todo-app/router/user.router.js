const express = require("express");
const userRouter = express.Router();
const User = require("../model/user.model");

userRouter.route("/")       // http://localhost:9090/users
    .get((req, res)=>{
        User.find().then(response => {
            return res.send(response);
        }).catch(err => {
            return res.send({err})
        })
        
    })
    .post((req, res) => {
        if(req.body){
            const user = new User(req.body);
            user.save().then(response=>{
                return res.send(response);
            }).catch(err=>{
                return res.send({err})
            })
        }
    })

    module.exports = userRouter;