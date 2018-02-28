// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// You should save your application's data inside of app/data/friends.js as an array
// of objects. Each of these objects should roughly follow the format below.
// {
//     "name":"Ahmed",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//         5,
//         1,
//         4,
//         4,
//         5,
//         1,
//         2,
//         5,
//         4,
//         1
//       ]
//   }

var friends =
[   {
      "name":"Adele",
      "photo":"https://www.pexels.com/photo/adult-beautiful-blonde-blur-324658/",
      "scores":[
            5,
            1,
            2,
            2,
            4,
            1,
            2,
            4,
            4,
            1
          ]
      },
      {
       "name":"Bev",
       "photo":"https://www.pexels.com/photo/portrait-of-smiling-girl-against-white-background-253758/",
       "scores":[
            3,
            1,
            3,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]    
      },
      {
        "name":"Vlad",
        "photo":"https://www.pexels.com/photo/beard-blur-casual-close-up-462680/",
        "scores":[
             2,
             1,
             2,
             4,
             5,
             1,
             2,
             5,
             4,
             1
           ]    
       },
       {
        "name":"Steve",
        "photo":"https://www.pexels.com/photo/man-young-happy-smiling-91227/",
        "scores":[
             5,
             5,
             4,
             4,
             5,
             1,
             2,
             5,
             4,
             1
           ]    
       },
       {
        "name":"Kat",
        "photo":"https://www.pexels.com/photo/woman-in-black-scoop-neck-shirt-smiling-38554/",
        "scores":[
             5,
             1,
             4,
             4,
             4,
             4,
             5,
             5,
             4,
             3
           ]    
       },
       {
        "name":"Victor",
        "photo":"https://www.pexels.com/photo/adult-beard-boy-casual-220453/",
        "scores":[
             3,
             2,
             4,
             4,
             5,
             5,
             1,
             5,
             4,
             1
           ]    
       }
]  

module.exports = friends;

// module.exports = function(app) {
    
//     app.get("/survey", function(req,res) {
//       res.sendFile(path.join(__dirname, "../public/survey.html"));
//     })
  
//     // app.use(function (req, res){
//     //   res.sendFile(path.join(__dirname, "../public/home.html"));
//     // })
//   }