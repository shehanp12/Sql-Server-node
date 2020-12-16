const express= require('express');
const  app= express();
const router = express.Router();
app.use('/api', router);
const dboperations = require('./dpoperations');
const EmployeePassword = require('./model/EmployeePassword');


const cors= require('cors');
const bodyParser = require('body-parser');




dboperations.getUsers().then(result =>{
    console.log(result)
})

router.use((request,response,next)=>{
    console.log('middleware');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


router.route('/orders').get((request,response)=>{

    dboperations.getUsers().then(result => {
        response.json(result);
    })

})



app.get('/',function (req,res) {
    res.send('Hello World');

});

app.listen(5000,()=>console.log('Sever is running'));
