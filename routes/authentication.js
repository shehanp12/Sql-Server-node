
'use strict';
const dboperations = require('../dpoperations');
const express = require('express');
const app = express();

const cors= require('cors');
const bodyParser = require('body-parser');
const router = express.Router();


router.get('/order',(request,response)=>{

    dboperations.getUsers().then(result => {
        response.json(result);
    })

})

router.get('/addJob',(request,response)=>{

    let job = {...request.body}

    dboperations.addJob(job).then(result => {
        response.status(201).json(result);
    })

})


module.exports=router;


