const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../../models/User');
const authHelp = require('./auth-helpers');

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username,password,done) => {
    User.findByUserName(username)
    .then(user => {
      if(!user){
        return done(null,false)
      }
      if(!authHelp.comparePasswords(password,user.password)){
        return done(null,false)
      }else{
        return done(null, user)
      }
    }).catch(err => {
      console.log(err);
      return done(err);
    })

  })
);

module.exports = passport;
