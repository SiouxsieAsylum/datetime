const db = require('../db/config');

const Invitation = {};

Invitation.create = (eventId,userId) => {
  return db.one(`INSERT INTO invitations (event_id,user_id) VALUES ($1,$2,$3) RETURNING *` [eventId,userId]);
}

Invitation.findByUser = (userId) => {
  return db.manyOrNone(`SELECT * FROM events JOIN invitations ON invitations.event_id = events.id WHERE invitations.user_id = $1`, [userId]);
}

Invitation.findByEvent = (eventId) => {
  return db.manyOrNone(`SELECT * FROM users JOIN invitations ON invitations.user_id = users.id WHERE event_id = $1`, [eventId]);
}

Invitation.updateRSVP = (invite,id) => {
  return db.one(`UPDATE invitations SET rsvp = $1 WHERE id = $2 RETURNING *`,[invite.rsvp, id]);
}

// invitation update status

Invitation.destroy = (id) => {
  return db.none(`DELETE FROM invitations WHERE id = $1`,[id])
}

module.exports = Invitation;
