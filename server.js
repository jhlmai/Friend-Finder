var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES 
var htmlRoutes = require('./app/routing/htmlRoutes.js');
// var apiRoutes = require('./app/routing/apiRoutes.js');

// apiRoutes(app);
htmlRoutes(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
