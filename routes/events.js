

'use strict';
const dboperations = require('../dpoperations');
const express = require('express');
const app = express();
// const addEvent = require('/data/events/index')
const cors= require('cors');
const bodyParser = require('body-parser');
const router = express.Router();

router.post('/shehan',async (request,response) =>{

    let event = {...request.body}
dboperations.addEvent(event).then(result =>{
    response.status(201).json(result);

})

})


module.exports=router;
