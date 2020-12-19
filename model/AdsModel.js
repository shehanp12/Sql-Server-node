const sql = require('mssql');
const  config = require('../dbconfig');


exports.setAd = async (
    imagePath,
    titleTxt,
    subTxt ,
    dist,
    reviews,
    rating,
    perMounth
) => {
    try {
        let pool = await sql.connect(config);
        let add= await pool.request().input()
        //var sql = "INSERT INTO `users_image`
        //     .query(
        //     "INSERT INTO"
        // );
        // return employee.recordset;

    }
    catch (error) {
        console.log(error);
    }
}




