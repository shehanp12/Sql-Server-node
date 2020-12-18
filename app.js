
'use strict';
const express= require('express');
const  app= express();
const router = express.Router();

const dboperations = require('./dpoperations');
const EmployeePassword = require('./model/EmployeePassword');
const cors= require('cors');
const bodyParser = require('body-parser');




// dboperations.getUsers().then(result =>{
//     console.log(result)
// })

// router.use((request,response,next)=>{
//     console.log('middleware');
//     next();
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


//Imports Routes
const authRoute = require('./routes/authentication');
const eventsRoute = require('./routes/events')

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/user',authRoute);
app.use('/api/user',eventsRoute);


app.get('/',function (req,res) {
    res.send('Hello World');

});

app.listen(5000,()=>console.log('Sever is running'));

module.exports= app;
