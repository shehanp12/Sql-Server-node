
'use strict';

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

async function addJob(job){
    try{

            let pool= await sql.connect(config);
            let insertJob = await  pool.request()
            .input('job_role',sql.Varchar,job.job_role)
            .execute();
            return addJob.recordsets;


    }catch (e) {
          console.log(e)
    }
}



module.exports = {
   getUsers:getUsers,
    addJob:addJob
}
