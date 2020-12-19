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

async function addEmployee(employee) {
     try{
         const pool = await sql.connect(config);
         const  insertEmployee = await  pool.request()
             .input('password',sql.NVarChar,employee.password)
             .input('first_name',sql.NVarChar,employee.first_name)
             .input('last_name',sql.NVarChar,employee.last_name)
             .input('phone_number',sql.NVarChar,employee.phone_number)
             .input('employee_address',sql.NVarChar,employee.employee_address)
             .input('department_id',sql.Int,employee.department_id)
             .execute('InsertEmployee');
         return insertEmployee.recordsets;
     }
     catch (e) {
         console.log(e)
     }




}





module.exports = {
    addEmployee:addEmployee,
    addEvent:addEvent

}
