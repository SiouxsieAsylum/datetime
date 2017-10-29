const express = require("express");
const eventController = require('../controllers/event-controllers')
const eventRouter = express.Router();

///////////////
// get routes/
/////////////
eventRouter.get("/", eventController.index);

eventRouter.get("/:id/edit", (req, res) => {
  // res.send(`event ${req.params.id}`)
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
