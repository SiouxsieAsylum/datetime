const passport = require('passport');
const User = ('../../models/user');

module.exports = () => {
  password.serializeUser((user,done) => {
    done(null, user.username)
  })

  passport.deserializeUser((user,done) => {
    User.findByUserName(username)
    .then(user => {
      done(null,user)
    }).catch(err => {
      done(err,user)
    })
  })
}
