const User = require('../models/user');
const Invitation = require('../models/invitation');
const bcrypt = require('bcryptjs');
const userController = {};

// hosted events are to be displayed on user profile, the day page, and on the index
userController.findHostedEvents = (req,res) => {
  User.findAllYourHostedEvents(req.params.id)
  .then(events => {
    res.render(`users/${req.params.id}/user-show`, {events})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.findAllEvents = (req,res) => {
  User.findAllEvents(req.params.id)
  .then(events => {
    res.render('users/user-index', {events})
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
    res.render('users/user-show', {user})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.edit = (req,res) => {
  User.findById(req.params.id)
  .then(user => {
    res.render('users/user-edit', {user})
  })
  .catch(err => {
        console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.invite = (req,res) => {
  User.invite({
    name: req.body.name,
    phone_number: req.body.phone_number,
    email: req.body.email,
  })
  .then(user => {
    Invitation.create(event_id, user.id);
    // res.render('users/user-show', {user})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.create = (req,res) => {
  console.log(req.body);
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  console.log(hash);
  User.create({
    name: req.body.name,
    phone_number: req.body.phone_number,
    email: req.body.email,
    username: req.body.username,
    password: hash
  })
  .then(user => {
    console.log(user);
    req.login(user,(err)=>{
      if (err) return next(err);
      res.redirect('/user')
    })
    // res.render('users/user-show', {user})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.update = (req,res) => {
  User.update({
    name: req.body.name,
    phone_number: req.body.phone_number,
    email: req.body.email
  }, req.params.id)
  .then(user => {
    res.render('users/user-show', {user})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}

userController.destroy = (req,res) => {
  User.destroy(req.params.id)
  .then(() => {
    res.redirect('back')
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops.js');
  })
}


module.exports = userController;
