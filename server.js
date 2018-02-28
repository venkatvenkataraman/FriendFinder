// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// var http = require("http");
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Friends (DATA)
// ====================================================
// require("./app/data/friends.js")(app);
var friends = require("./app/data/friends.js");

// Routes
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond 
// when users visit or request data from various URLs.
//=====================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//   // Basic route that sends the user first to the AJAX Page
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "public/home.html"));
//   });
  
//   app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "public/survey.html"));
//   });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    // console.log(friends);
    console.log("App listening on PORT " + PORT);
  });
  