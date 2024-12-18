require("dotenv").config();

const express = require("express");
const app = express();
const port = 3001;
const sendMail = require("./mail");
var cors = require("cors");

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/request", (req, res) => {
  sendMail(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
