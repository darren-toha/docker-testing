"use strict";

const express = require("express");

// Constants
const PORT = 3001;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Yes, I'm working!");
});

app.post("/test-endpoint", (req, res) => {
  console.log("req");
  res.send(req.body);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
