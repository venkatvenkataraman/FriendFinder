// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var friends = require("../data/friends.js");



// Your apiRoutes.js file should contain two routes:
// 1. A GET route with the url /api/friends. This will be used 
// to display a JSON of all possible friends.
// 2. A POST routes /api/friends. This will be used to handle
// incoming survey results. This route will also be used to
// handle the compatibility logic.

module.exports = function(app) {

  // Routes
  // =============================================================
  // Basic route that sends the user first to the AJAX Page
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // 1. A GET route with the url /api/friends. This will be used 
    // to display a JSON of all possible friends.

    app.get("/api/friends", function(req,res) {
      res.json(friends);
    });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)

  // 2. A POST routes /api/friends. This will be used to handle
  // incoming survey results. This route will also be used to
  // handle the compatibility logic.

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
     friends.push(req.body);
     res.json(true);
    });


//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friends = [];
//     console.log(friends);
//   });
};
