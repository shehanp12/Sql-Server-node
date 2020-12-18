const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {

    const sqlQueries = await utils.loadSqlQueries( "events" );

    const addEvent = async ( { userId, title, description, startDate, startTime, endDate, endTime } ) => {
        const cnx = await getConnection();
        const request = await cnx.request();
        request.input( "userId", sql.VarChar( 50 ), userId );
        request.input( "title", sql.VarChar( 200 ), title );
        request.input( "description", sql.VarChar( 1000 ), description );
        request.input( "startDate", sql.Date, startDate );
        request.input( "startTime", sql.Time, startTime );
        request.input( "endDate", sql.Date, endDate );
        request.input( "endTime", sql.Time, endTime );
        return await request.query( sqlQueries.addEvent );
    };


    return {
        addEvent

    };





}

module.exports = { register };
