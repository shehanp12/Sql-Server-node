const utils = require( "../utils" );
const  config = require('/dbconfig');
const sql = require('mssql');

    const sqlQueries = await utils.loadSqlQueries( "events" );


        async function addEvent({title, description, startDate, startTime, endDate, endTime }) {
            const cnx = await sql.connect(config);

            const request = await cnx.request();
            request.input( "title", sql.VarChar( 200 ), title );
            request.input( "description", sql.VarChar( 1000 ), description );
            request.input( "startDate", sql.Date, startDate );
            request.input( "startTime", sql.Time, startTime );
            request.input( "endDate", sql.Date, endDate );
            request.input( "endTime", sql.Time, endTime );
            return await request.query( sqlQueries.addEvent );

        }





module.exports = {
   addEvent:addEvent

}






