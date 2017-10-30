const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const validate = require("express-validator");
const mailer = require('express-mailer');
const logger = require("morgan");
const sesh = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const timeKeep = require("./services/time-helpers");
const userRoutes = require("./routes/user-routes");
const eventRoutes = require("./routes/event-routes");
const authRoutes = require("./routes/auth-routes");
const port = process.env.PORT || 8000;

const app = express();
require('dotenv').config();


app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY;
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth",authRoutes);
app.use("/events", eventRoutes);
app.use("/user", userRoutes);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(request, response){
  response.render("index");
})

app.listen(port, () => {
  console.log("Server's up!");
})
