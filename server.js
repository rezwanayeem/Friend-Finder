// Dependencies
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

// Sets a port. 
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("Friend Finder listening on PORT: " + PORT);
});