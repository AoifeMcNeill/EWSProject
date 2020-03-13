//load the package and create our app
var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

//Set the port based on environment
var port = PORT;

//send our index.html file to the user for the home page
app.get("/", function(req, res) {
    res.sendFile(__dirname + "pages/index.html");
});



//Start the server
app.listen(PORT);

console.log("Express Server running at http://127.0.0.1:'.PORT");