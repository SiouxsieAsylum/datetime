const express = require("express");
const eventController = require('../controllers/event-controllers');
const authHelpers = require('../services/auth/auth-helpers');
const eventRouter = express.Router();

///////////////
// get routes/
/////////////

eventRouter.get('/', authHelpers.loginRequired, (req, res) => {
  res.redirect("/user", {
      auth: (req.user) ? true : false
    });
})

eventRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('events/event-new',{user: req.user, event:false,
      auth: (req.user) ? true : false
    });
})

eventRouter.get('/day/:day',eventController.findByDay)

eventRouter.get("/:plan_id/edit", authHelpers.loginRequired, eventController.edit)
// model and controller not written yet
eventRouter.get('/:plan_id', eventController.show);
///////////////
//post routes/
/////////////
eventRouter.post('/', eventController.create);

///////////////
//put routes//
/////////////
eventRouter.put('/:plan_id', eventController.update);

////////////////
//delete routes
//////////////
eventRouter.delete('/:plan_id', eventController.update);

module.exports = eventRouter;
