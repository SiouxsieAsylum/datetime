const User = require('../models/user');

const userController = {};

// hosted events are to be displayed on user profile, the day page, and on the index
userController.findHostedEvents = (req,res) => {
  User.findAllYourHostedEvents(req.params.id)
  .then(events => {
    res.render('user/user-show', events
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

userController.create = (req,res) => {
  User.delete(req.params.id);
  .then(user => {
    res.render('user/user.show', user)
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}


module.exports = userController;
