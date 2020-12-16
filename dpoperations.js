const sql = require('mssql');
const  config = require('./dbconfig');


async function getUsers() {
    try {
        let pool = await sql.connect(config);
        let employee= await pool.request().query("SELECT * from EmployeeSchema.EmployeePassword");
         return employee.recordset;

    }
    catch (error) {
        console.log(error);
    }
}

async function addUser(user){
    try{

        let pool= await sql.connect(config);
        let insertUser = await  pool.request()
            .input('UserId',sql.Int,user.UserId)

    }catch (e) {

    }
}



module.exports = {
   getUsers:getUsers
}
