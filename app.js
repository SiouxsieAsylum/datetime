const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const validate = require("express-validator");
const mailer = require('express-mailer');
const logger = require("morgan");

const timeKeep = require("./services/time-helpers");
const userRoutes = require("./routes/user-routes");
const eventRoutes = require("./routes/event-routes");
const port = process.env.PORT || 8000;

const app = express();

// mailer.extend(app, {
//   from: 'datetimetest001@yahoo.com',
//   host: 'smtp.yahoo.com', // hostname
//   secureConnection: true, // use SSL
//   port: 465, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//     user: req.user.email,
//     pass: req.user.password
//   }
// });



app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(timeKeep);
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
