//best thing to do is to have another chained .then that handles the backend submission of invitees to the database
// eventController.create = (blah) =>
// Event create
// .then loop through invite creations? (hold them where? local storage?)
// .then res.render/res.redirect whereever
// .catch
const Event = require('../models/event');
const Invitation = require('../models/invitation');

const eventController = {}

eventController.findRSVPs = (req,res) => {
  Event.findRSVPs(req.params.id)
  .then(users => {
    res.render('event/event-show', {users})
  })
  .catch(err => {
    res.status.render('auth/oops');
  })
}

eventController.findByDay = (req,res) => {
  Event.findByDay(req.params.day)
  .then(events => {
    res.render('events/event-index', {events})
  })
  .catch(err => {
    res.status.render('auth/oops');
  })
}

eventController.index = (req,res) => {
  Event.findAll()
  .then(events => {
    res.render('events/event-index');
  })
}
eventController.show = (req,res) => {
  Event.findById(req.params.id)
  .then(event => {
    res.render('events/event-show', {event})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops');
  })
}
eventController.create = (req,res) => {
  Event.create({
    name = req.body.name,
    day = req.body.day,
    // address = req.body.address,
    time_begins = req.body.time_begins,
    time_ends - req.body.time_ends,
    description = req.body.description
  })
  .then(event => {
    // there will be a form in the modal, and it will be a post request to create many users. those users,a nd the event information, will be passed on to make a new Invitation
    res.render('events/event-show', {event})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops');
  })
}
eventController.update = (req,res) => {
  Event.update({
    name = req.body.name,
    day = req.body.day,
    // address = req.body.address,
    time_begins = req.body.time_begins,
    time_ends - req.body.time_ends,
    description = req.body.description
  },req.params.id)
  .then(event => {
    // there will be a form in the modal, and it will be a post request to create many users. those users,a nd the event information, will be passed on to make a new Invitation
    res.render('events/event-show', {event})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops');
  })
}
eventController.delete = (req,res) => {
  Event.delete(req.params.id)
  .then(() => {
    res.redirect('/user');
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops');
  })
}

module.exports = eventController;
