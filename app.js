const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const validate = require("express-validator");
const push = require("node-pushnotifications");
// console.log(validate);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(request, response){
  response.render("index");
})

app.listen(8000, function(){
  console.log("Server's up!");
})
