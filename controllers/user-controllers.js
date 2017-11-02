const User = require('../models/User');
const Invitation = require('../models/Invitation');
const bcrypt = require('bcryptjs');
const userController = {};

// hosted events are to be displayed on user profile, the day page, and on the index
userController.findHostedEvents = (req,res) => {
  User.findAllYourHostedEvents(req.user.id)
  .then(events => {
    res.render(`users/user-show`, {events, user: req.user, auth: (req.user) ? true : false
    });
  })
  .catch(err => {
    console.log(err);
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
  })
}

userController.findAllEvents = (req,res) => {
  User.findAllEvents(req.user.id)
  .then(events => {
    console.log("events", events);
    res.render('users/user-index', {events, user: req.user,
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
// to be implemented
// userController.findFriends = (req,res) => {
//   User.findAllYourFriends(req.user.id)
//   .then(users => {
//     // render a partial of all prev users in the create event page
//     // res.render('user/user-show', events
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).render('auth/oops.js');
//   })
// }

// necessary?
// userController.show = (req,res) => {
//   User.findById(req.user.id)
//   .then(user => {
//     res.render('users/user-show', {user,
//       auth: (req.user) ? true : false
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).render('auth/oops.js');
//   })
// }

userController.edit = (req,res) => {
  User.findById(req.user.id)
  .then(user => {
    res.render('users/user-edit', {user,
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

// userController.invite = (req,res) => {
//   User.invite({
//     name: req.body.name,
//     phone_number: req.body.phone_number,
//     email: req.body.email,
//   })
//   .then(user => {
//     Invitation.create(event_id, user.id);
//     // res.render('users/user-show', {user})
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).render('auth/oops.js');
//   })
// }

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
  })
  .catch(err => {
    console.log(err);
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
  })
}

userController.update = (req,res) => {
  User.update({
    name: req.body.name,
    phone_number: req.body.phone_number,
    email: req.body.email
  }, req.params.id)
  .then(user => {
    res.render('users/user-show', {user,
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

userController.destroy = (req,res) => {
  User.destroy(req.params.id)
  .then(() => {
    res.redirect('back')
  })
  .catch(err => {
    console.log(err);
     res.status(500).render('auth/oops', {user: req.user,
      auth: (req.user) ? true : false
    })
})
}


module.exports = userController;
