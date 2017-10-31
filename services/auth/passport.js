const passport = require('passport');
const User = require('../../models/user');

module.exports = () => {
  passport.serializeUser((user,done) => {
    done(null, user.username)
  })

  passport.deserializeUser((user,done) => {
    console.log(user);
    User.findByUserName(user)
    .then(user => {
      done(null,user)
    }).catch(err => {
      done(err,user)
    })
  })
}
