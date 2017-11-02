const Invitation = require('../models/Invitation');
const invitationController = {};

invitationController.create = (req,res) => {
  Invitation.create({
    user_id = req.body.user_id,
    event_id = req.body.event_id
  })
  .then(invitation => {
    res.redirect(`events/${invitation.event_id}`)
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops')
  })
}
invitationController.findByUser = (req,res) => {
  Invitation.findByUser(req.params.id)
  .then(events => {
    // to be displayed on user profile
    res.redirect(`users/${req.params.id}`, {events})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops')
  })
}
invitationController.findByEvent = (req,res) => {
  Invitation.findByEvent(req.params.id)
  .then(users => {
    // to be displayed on user profile
    res.redirect(`events/${req.params.id}`, {users})
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops')
  })
}
invitationController.updateRSVP = (req,res) => {
  Invitation.updateRSVP({
    rsvp = req.body.rsvp
  }, req.params.id)
  .then(invitation => {
    res.redirect(`events/${invitation.event_id}`)
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops')
  })
}
invitationController.destroy = (req,res) => {
  Invitation.destroy(req.params.id)
  .then(() => {
    res.redirect(`/back`)
  })
  .catch(err => {
    console.log(err);
    res.status(500).render('auth/oops')
  })
}


module.exports = invitationController;
