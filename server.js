const express = require("express");
const app = express();

app.listen(3000, () => console.log("Server is listening on port 3000. Ready to accept requests!"));

app.get("/", function (req, res) {
    res.send("hello world");
  });

  app.get("/about", function (req, res) {
    res.send("I am Mursel");
  });

  app.get("/search", function (req, res) {
    let searchQuery = req.query.me;
    let searchQuery2 = req.query.you;
   // res.send("Hello World! You searched for " + searchQuery + " " + searchQuery2);
   res.json(req.query)
  });