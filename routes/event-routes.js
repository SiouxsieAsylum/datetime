const express = require("express");
const eventController = require('../controllers/event-controllers')
const eventRouter = express.Router();

///////////////
// get routes/
/////////////
eventRouter.get("/", eventController.index);

// whichever of these two controllers come first will run because the routes can't automatically tell the datatype. gotta make sure the right controller is being invoked
eventRouter.get("/:id", (req,res) => {
  if ((req.params.id).includes("-")){
    console.log("in the day");
    eventController.findByDay
  } else {
    console.log("in the show");
    eventController.show
  };
})
// eventRouter.get("/:day", eventController.findByDay);

eventRouter.get("/:id/edit", (req, res) => {
  res.render('events/event-edit')
})
// model and controller not written yet
eventRouter.get('/:day', eventController.findByDay);

eventRouter.get('/new', (req, res) => {
  res.render('events/events-new');
})
///////////////
//post routes/
/////////////
eventRouter.post('/', eventController.create);

///////////////
//put routes//
/////////////
eventRouter.put('/:id', eventController.update);

////////////////
//delete routes
//////////////
eventRouter.delete('/:id', eventController.update);

module.exports = eventRouter;
