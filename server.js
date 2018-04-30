// Requires all the necessary packages for the program
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes.js")
var htmlRoutes = require("./app/routing/htmlRoutes.js")

// calling express function
var app = express();

// Slash is referred to as root

app.listen(3008, function(){
    
    console.log("yeet")
    
});

app.get("/", function(request, result){
    console.log("you yote the root")
    result.sendfile("./app/public/home.html")
    
} );


