

const sql = require('mssql');
const  config = require('./dbconfig');


async function getUsers() {
    try {
        let pool = await sql.connect(config);
        let employee= await pool.request().query("SELECT * from EmployeeSchema.Job");
         return employee.recordset;

    }
    catch (error) {
        console.log(error);
    }
}

async function addEvent(event) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('title', sql.NVarChar, event.title)
            .input('description', sql.NVarChar,event.description)
            .input('startDate', sql.Date, event.startDate)
            .input('startTime', sql.Time,event.startTime)
            .input('endDate', sql.Date,event.endDate)
            .input('endTime', sql.Time,event.endTime)
            .execute('InsertPersonalDetails');
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}


module.exports = {
   getUsers:getUsers,
    addEvent:addEvent

}
