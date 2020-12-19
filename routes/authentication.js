
'use strict';
const dboperations = require('../dpoperations');
const express = require('express');
const app = express();

const cors= require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// router.get('/order',(request,response)=>{
//
//     dboperations.getUsers().then(result => {
//         response.json(result);
//     })
//
// })
//
// router.get('/addJob',(request,response)=>{
//
//     let job = {...request.body}
//
//     dboperations.addJob(job).then(result => {
//         response.status(201).json(result);
//     })
//
// })



router.post('/register',async (req,res) =>{

    if ((!req.body.username) || (!req.body.password)) {
        res.json({success: false, msg: 'Enter all fields'})
    }
    else{

        // const  emailExist = await BoardingProvider.findOne({email:req.body.email});
        // if(emailExist) return  res.json({success: false, msg: 'Email is already exits'});

        // Hash Passwords
        const  salt = await bcrypt.genSalt(10);

        // const  hashPassword = await bcrypt.hash(req.body.password,salt)

        // const  boardingProvider = new BoardingProvider({
        //
        //     username:req.body.username,
        //     fullName:req.body.fullName,
        //     email:req.body.email,
        //     password:hashPassword
        // })

        const user = {...req.body}
         dboperations.

        boardingProvider.save(function (err,boardingProvider){
            if(err){
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
            }
        })

    }







});



module.exports=router;


