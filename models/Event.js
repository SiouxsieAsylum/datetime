 const db = require('../db/config');

const Event = {};

Event.findByDay = (day) => {
  return db.manyOrNone(`SELECT * FROM events WHERE events.day = $1`, [day]);
}

// do I need to set this to if invited/hosted?

Event.findAll = () => {
  return db.query(`SELECT * FROM events`);
}

Event.findMyEvents = (userId) => {
  return db.query(`SELECT * FROM events JOIN invitations ON invitations.event_id = events.id WHERE invitations.user_id = $1;`, [userId]);
}

Event.findById = (id) => {
  return db.one(`SELECT * FROM events WHERE id = $1`, [id])
}

// there needs to be a find my hosted events, maybe here?
// there should be a find by day function too

Event.create = (event,userId) => {
  return db.one(`INSERT INTO events (name, day, address, time_begins, time_ends, description, host_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,[event.name, event.day, event.address, event.time_begins, event.time_ends, event.description, userId])

  // gotta chain some promises
  // have an op to create ids plus invites, but back end handle seperately.
  // this should be in invition model
  // return db.one(`INSERT INTO invitations (user_id, event_id) VALUES ($1, $2) RETURNING *`, [event.host_id, event.id,])
}

Event.findRSVPs = (id) => {
  return db.manyOrNone(`SELECT user.name, invitations.rsvp FROM invitations JOIN events ON events.id = invitations.event_id JOIN users ON users.id = invitations.user_id WHERE invitations.event_id = $1`,[id])
}

Event.update = (event, id) => {
   return db.one(`UPDATE events SET name = $1, day=$2, time_begins = $3, time_ends=$4, description=$5, host_id=$6 WHERE id = $7 RETURNING *`,[event.name, event.day, event.time_begins, event.time_ends, event.description, event.host_id, id])
}

Event.delete = (id) => {
  return db.none(`DELETE FROM events WHERE id = $1`, [id])
}

module.exports = Event;
