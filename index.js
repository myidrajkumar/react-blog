const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./model/user");

mongoose
  .connect(
    "mongodb+srv://rajkumar:midas256@reactblog-5sji8.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Could not connect to DB: ", err));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/users/register", (req, res) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if(err) {
            return res.json({success: false, err});
        }
    });
  return res.json({success: true}).status(200);
});

app.listen(5000);
