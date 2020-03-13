//load the package and create our app
var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

//Set the port based on environment
var port = PORT;

//send our index.html file to the user for the home page
app.get("/pages/index", function(req, res) {
    res.sendFile(__dirname + "pages/index.html");
});

//Middleware section
//create routes for admin section
//get an instance of the router
var adminRouter = express.Router();
//admin dashboard
adminRouter.get('/', function(req, res) {
    res.send("I am the dashboard!");

    //users page
    adminRouter.get("/users", function(req, res) {
        res.send("I show all the users!");
    });

    //posts page
    adminRouter.get("/posts", function(req, res) {
        res.send("I show all the posts!");
    });

    //apply the routes to our application
    app.use("/admin", adminRouter);

    //about page
    app.route("/pages/about")

    //profile page
    app.route("/pages/profile")

    //find page
    app.route("/pages/find")

    //login page
    app.route("/pages/login")

    //signup page
    app.route("/pages/signup")

    //show me the form
    .get(function(req, res) {
        res.send("this is the login form");
    })

    //process the form
    .post(function(req, res) {
        console.log("processing");
    });
});
//Start the server
app.listen(PORT);

console.log("Express Server running at http://127.0.0.1:'.PORT");