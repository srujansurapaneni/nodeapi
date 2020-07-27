// define imports
const express = require("express");

// define app
const app = express();
app.use(express.json());

// define get handler function
app.get("/", function (req, res) {
  res.send("Getted");
  console.log("Getted");
  // We must end the request when we are done handling it
  res.end();
});

// define put handler function
app.post("/", function (req, res) {
  console.log(req.body);
  res.send("Posted");
  console.log("Posted");
  // We must end the request when we are done handling it
  res.end();
});

// serve the app
const server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("node api app listening at http://%s:%s", host, port);
});
