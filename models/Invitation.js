const db = require('../db/config');

const Invitation = {};

Invitation.create = (eventId,userId) => {
  return db.one(`INSERT INTO invitations (event_id,user_id) VALUES ($1,$2,$3) RETURNING *` [eventId,userId]);
}

Invitation.findByUser = (userId) => {
  return db.manyOrNone(`SELECT * FROM invitations WHERE user_id = $1`, [userId]);
}

Invitation.findByEvent = (eventId) => {
  return db.manyOrNone(`SELECT * FROM invitations WHERE event_id = $1`, [eventId]);
}

Invitation.updateRSVP = (invite,id) => {
  return db.one(`UPDATE invitations SET rsvp = $1 WHERE id = $2`,[invite.rsvp, id]);
}

Invitation.destroy = (invite,)

module.exports = Invitation;
