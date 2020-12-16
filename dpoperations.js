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



module.exports = {
   getUsers:getUsers
}
