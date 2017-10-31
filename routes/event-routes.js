const express = require("express");
const eventController = require('../controllers/event-controllers')
const eventRouter = express.Router();

///////////////
// get routes/
/////////////

eventRouter.get('/new', (req, res) => {
  res.render('events/event-new',{
      auth: (req.user) ? true : false
    });
})

eventRouter.get('/day/:day',eventController.findByDay)

eventRouter.get("/:id/edit", eventController.edit)
// model and controller not written yet
eventRouter.get('/:id', eventController.show);
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
