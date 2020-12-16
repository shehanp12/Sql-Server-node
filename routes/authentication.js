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

module.exports=router;


