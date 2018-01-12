module.exports = function(app) {
	var fs = require('fs');

	var friends = require('./app/routing/htmlRoutes.js');
	var apiRoutes = require('./app/routing/apiRoutes.js');



	var surveyData = {};

// GET route with the url `/api/friends`. 
// This will be used to display a JSON of all possible friends.
	app.get("/api/friends", function(req, res) {

		fs.readFile('app/data/friends.js', , function(err,data){
			// console.log(typeof data, data);
			var parsed = JSON.parse(data);
			var arr = parsed.scoreboard;
			console.log('arr',arr);
			res.json(arr);
		})
	});

// POST routes `/api/friends`. 
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic. 
	app.post('/api/friends', function(req,res){
		console.log('post /api/friends ---------------------------');
		var newData = req.body;
		console.log('newData',newData);

		fs.readFile('app/data/friends.json', function(err,data){
			var parsed = JSON.parse(data);
			surveyData = parsed;
			var arr = parsed.scoreboard;

			// Call function that will return most compatible.
			var winners = findMatch(newData.scores,arr)

			// Add the new data to the rest since the comparison is finished.
			arr.push(newData);
			var dataExport = JSON.stringify({scoreboard:arr});
			fs.writeFile('app/data/friends.json',dataExport,'utf8',function(err,data){
				if(err) throw err; 
			})
		}

			// Convert each user's results into a simple array of numbers

			// compare the difference between current user's scores 
			// against those from other users, question by question. 
			// Add up the differences to calculate the totalDifference.
			// The closest match will be the user with the least amount of difference.

			// Once you've found the current user's most compatible friend
			// display the result as a modal pop-up.
