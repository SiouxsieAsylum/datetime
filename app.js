

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const validate = require("express-validator");
const push = require("node-pushnotifications");
const logger = require("morgan");


const profRoute = require("./routes/profile-routes");
const eventRoute = require("./routes/event-routes");
const port = process.env.PORT || 8000;
// console.log(validate);

const app = express();

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/events", eventRoute);
app.use("/profile", profRoute);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(request, response){
  response.render("index");
})

app.listen(port, () => {
  console.log("Server's up!");
})
