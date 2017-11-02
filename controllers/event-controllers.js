
const Event = require('../models/Event');
const Invitation = require('../models/Invitation');
// const help = require('../services/time-helpers');

const eventController = {}

// eventController.findRSVPs = (req,res) => {
//   Event.findRSVPs(req.params.id)
//   .then(users => {
//     res.render('events/event-show', {users, user: req.user})
//   })
//   .catch(err => {
//      res.status(500).render('auth/oops', {user: req.user,
//       auth: (req.user) ? true : false
//     })
//   })
// }

eventController.edit = (req,res) => {
  Event.findById(req.params.plan_id)
  .then(event => {
    console.log(typeof req.params.plan_id)
    res.render('events/event-edit', {event, user: req.user})
  })
  .catch(err => {
    console.log(err);
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
  })
}

eventController.findByDay = (req,res) => {
  Event.findByDay(req.params.day)
  // console.log("day passed")
  .then((events) => {
    // console.log(typeof req.params.day)
    res.render('events/event-day', { events, day: req.params.day, user: req.user.id, auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err)
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
  })
}


eventController.show = (req,res) => {
  Event.findById(req.params.plan_id)
  .then(event => {
    res.render('events/event-show', {event, user: req.user,
      auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err);
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
  })
}
eventController.create = (req,res) => {
  Event.create({
    title: req.body.title,
    day: req.body.day,
    address: req.body.address,
    time_begins: req.body.time_begins,
    time_ends: req.body.time_ends,
    description: req.body.description,
    host_id: req.user.id
  })
  // .then(event => {
    // event doesn't really exist just yet so you can't take the id
    // Invitation.create(event.id,req.user.id);
  //   return event;
  // })
  .then(event => {
    res.redirect('/user');
  })
  .catch(err => {
    console.log(err);
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
  })
}
eventController.update = (req,res) => {
  Event.update({
    title: req.body.title,
    day: req.body.day,
    time_begins: req.body.time_begins,
    time_ends: req.body.time_ends,
    description: req.body.description
  },req.params.plan_id)
  .then(event => {
    // there will be a form in the modal, and it will be a post request to create many users. those users,a nd the event information, will be passed on to make a new Invitation
    res.render('events/event-show', {event, user: req.user,
      auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err);
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
  })
}
eventController.delete = (req,res) => {
  Event.delete(req.params.id)
  .then(() => {
    res.redirect('/user');
  })
  .catch(err => {
    console.log(err);
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
  })
}

module.exports = eventController;
