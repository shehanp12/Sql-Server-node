

module.exports.register = async server => {

    server.route( {
        method: "POST",
        path: "/api/events",

        handler: async request => {


                const db = request.server.plugins.sql.client;
                const userId = request.auth.credentials.profile.id;
                const { startDate, startTime, endDate, endTime, title, description } = request.payload;
                const res = await db.events.addEvent( { userId, startDate, startTime, endDate, endTime, title, description } );
                return res.recordset[ 0 ];


        }
    } );

}
