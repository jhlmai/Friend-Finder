
module.exports = function(app) {
	var fs = require('fs');
	var ogData = {};

// A GET route with the url /api/friends. 
// This will be used to display a JSON of all possible friends.
	app.get("/api/friends", function(req, res) {

		fs.readFile('app/data/friends.json', function(err,data){
			// console.log(typeof data, data);
			var parsed = JSON.parse(data);
			var arr = parsed.scoreboard;
			console.log('arr',arr);
			res.json(arr);
		})
    });
    

    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    