

'use strict';
const dboperations = require('../dpoperations');
const express = require('express');
const app = express();
// const addEvent = require('/data/events/index')
const cors= require('cors');
const bodyParser = require('body-parser');
const router = express.Router();

router.post('/shehan',async (request,response) =>{

    const res = await data.events
        .addEvent({title,description,startDate,startTime,endTime});
    return res.recordset[ 0 ];

})


module.exports=router;
