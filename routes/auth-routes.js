const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const userControllers = require('../controllers/user-controllers');

authRouter.get('/login', authHelpers.loginRedirect, (req,res,next) => {
  res.render('auth/login')
})

authRouter.get('/register', authHelpers.loginRedirect, (req,res,next) => {
  res.render('auth/register')
})

authRouter.post('/register', userControllers.create);

authRouter.get('/login', authHelpers.loginRedirect, (req,res,next) => {
  res.render('auth/login')
})

authRouter.post('/login', passport.authenticate('local',{
  successRedirect:'/user',
  failureRedirect:'/auth/login',
  failureFlash: false
}))

authRouter.get('logout', (req,res)=>{
  req.logout();
  res.redirect('back');
})

module.exports = authRouter;
