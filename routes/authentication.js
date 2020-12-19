
'use strict';
const dboperations = require('../dpoperations');
const express = require('express');
const app = express();

const cors= require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.post('/register',async (req,res) =>{

    if ((!req.body.last_name) || (!req.body.first_name)) {
        res.json({success: false, msg: 'Enter all fields'})
    }
    else{
        const user = {...req.body}
         dboperations.addEmployee(user).then(result =>{
             res.status(201).json(result);

         })

    }

});





module.exports=router;


