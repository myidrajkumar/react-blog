const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://rajkumar:midas256@reactblog-5sji8.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Could not connect to DB: ", err));

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Ekaa");
});

app.listen(5000);
