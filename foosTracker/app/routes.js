/**
 * Created by Tom on 11/09/2014.
 */
// app/routes.js

module.exports = function(app) {

	//server routes ============================================
	// handle things like api calls
	// authentication route

    // front end route ==============================================
    // route to handle all angular requests
    app.get('*', function(req, res){
        res.sendfile('./public/views/index.html'); // load our public/index.html files
    });
}

