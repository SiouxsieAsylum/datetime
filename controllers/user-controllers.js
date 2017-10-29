const User = require('../models/user');

const userController = {};

// hosted events are to be displayed on user profile, the day page, and on the index
userController.findHostedEvents = (req,res) => {
  User.findAllYourHostedEvents(req.params.id)
  .then(events => {
    res.render(`user/${req.params.id}/user-show`, events
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.findAllEvents = (req,res) => {
  User.findAllEvents(req.params.id)
  .then(events => {
    res.render('user/user-index', events
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.findFriends = (req,res) => {
  User.findAllYourFriends(req.params.id)
  .then(users => {
    // render a partial of all prev users in the create event page
    // res.render('user/user-show', events
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.show = (req,res) => {
  User.findById(req.params.id)
  .then(user => {
    res.render('user/user-show', events
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.create = (req,res) => {
  User.create({
    name = req.body.name,
    phone_number = req.body.phone_number,
    email = req.body.email
  })
  .then(user => {
    res.render('user/user-show', user)
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.update = (req,res) => {
  User.update({
    name = req.body.name,
    phone_number = req.body.phone_number,
    email = req.body.email
  }, req.params.id)
  .then(user => {
    res.render('user/user-show', user)
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.delete = (req,res) => {
  User.delete(req.params.id);
  .then(() => {
    res.redirect('/back')
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}


module.exports = userController;
