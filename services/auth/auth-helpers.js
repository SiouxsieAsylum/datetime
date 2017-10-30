const bcrypt = require('bcryptjs');

function comparePasswords(userpass,dbpass){
  return bcrypt.compareSync(userpass,dbpass);
}

function loginRedirect(req,res,next){
  if (req.user) return res.redirect('/user');
  next();
}

function loginRequired(req,res,next){
  if(!req.user) return res.redirect('/auth/login')
  next();
}

module.exports = { comparePasswords, loginRedirect, loginRequired };
