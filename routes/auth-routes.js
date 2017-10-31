const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const userControllers = require('../controllers/user-controllers');

///////////////////
/////GET REQS/////
/////////////////

authRouter.get('/register', authHelpers.loginRedirect, (req,res,next) => {
  res.render('auth/register',{
      auth: (req.user) ? true : false
    })
})


authRouter.get('/login', authHelpers.loginRedirect, (req,res,next) => {
  res.render('auth/login',{
      auth: (req.user) ? true : false
    })
})

authRouter.get('logout', (req,res)=>{
  req.logout();
  res.redirect('back');
})

///////////////////
/////POST REQS////
/////////////////

authRouter.post('/register', userControllers.create);

authRouter.post('/login', passport.authenticate('local',{
  successRedirect:'/user',
  failureRedirect:'/auth/login',
  failureFlash: true
}))



module.exports = authRouter;
