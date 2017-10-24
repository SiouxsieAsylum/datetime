const db = require('../db/config');

const Invitation = {};

Invitation.create = (eventId,userId) => {
  return db.one(`INSERT INTO invitations (event_id,user_id) VALUES ($1,$2) RETURNING *` [eventId,userId]);
}

module.exports = Invitation;
