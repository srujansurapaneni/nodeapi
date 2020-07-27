// define imports
const express = require("express");
const sql = require("mssql");

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

// Database Connections
//define config
const config = {
  user: "SA",
  password: "OneforYou1",
  server: "localhost", // You can use 'localhost\\instance' to connect to named instance
  database: "master",
};
//make connection
sql.connect(config, (err) => {
  // Query
  new sql.Request().query(
    "select * from dbo.test_table tt where name = 'Dinesh';",
    (err, result) => {
      // ... error checks

      console.dir(result);
    }
  );
});

// serve the app
const server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("node api app listening at http://%s:%s", host, port);
});
