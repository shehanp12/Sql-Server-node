// const dboperations = require('../dpoperations');
const service = require('../services/adsServices')
const express = require('express');
const app = express();

const cors= require('cors');
const bodyParser = require('body-parser');
const router = express.Router();


router.post('/ads',(request,response)=>{

    // dboperations.getUsers().then(result => {
    //     response.json(result);
    // })
    //
    // imagePath: 'images/room1.jpeg',
    //     titleTxt: 'Bedrooms',
    //     subTxt: 'pitipana,homagama',
    //     dist: 2.0,
    //     reviews: 80,
    //     rating: 4.4,
    //     perMounth: 50,
    service.addAds(request)
        .then(()=>{
            console.log("success")
            response.status(200)
            response.json({
                message: 'Success'
            })
        })
        .catch((err)=>{
            response.status(400)
            response.json({
                error: err
            })
        })



})

module.exports=router;


