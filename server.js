const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const app = express();

//Connecting To Database
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Setup Point For View (Incase of not using API)
app.set("view engine", "ejs");

// Url Encoder
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(bodyParser.json());

// Intializing Route - { Using Middleware }
app.use("/auth", authRouter);
app.use("/articles", articleRouter);

//Listening to Port 5000
app.listen(5000);
