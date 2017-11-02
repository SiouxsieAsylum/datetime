 const db = require('../db/config');
 // const Invitation

const Event = {};

Event.findByDay = (day) => {
  return db.manyOrNone(`SELECT * FROM events WHERE events.day = $1`, [day]);
}

// do I need to set this to if invited/hosted?

Event.findAll = () => {
  return db.query(`SELECT * FROM events`);
}

Event.findMyEvents = (userId) => {
  return db.query(`SELECT * FROM events JOIN invitations ON invitations.event_id = events.plan_id WHERE invitations.user_id = $1;`, [userId]);
}

Event.findById = (id) => {
  return db.one(`SELECT * FROM events WHERE plan_id = $1`, [id])
}

// there needs to be a find my hosted events, maybe here?
// there should be a find by day function too

Event.create = (event) => {
  db.none(`INSERT INTO events (title, day, address, time_begins, time_ends, description, host_id) VALUES ($1,$2,$3,$4,$5,$6,$7)`,[event.title, event.day, event.address, event.time_begins, event.time_ends, event.description, event.host_id])
  db.none(`INSERT INTO invitations (event_id, user_id) values ((SELECT plan_id FROM events WHERE host_id = $1 ORDER BY plan_id DESC LIMIT 1), $1);`,[event.host_id]);
  return db.one(`SELECT * FROM events WHERE host_id = $1 ORDER BY plan_id DESC LIMIT 1;`,[event.host_id]);

  // gotta chain some promises
  // have an op to create ids plus invites, but back end handle seperately.
  // this should be in invition model
  // return db.one(`INSERT INTO invitations (user_id, event_id) VALUES ($1, $2) RETURNING *`, [event.host_id, event.id,])
}

Event.findRSVPs = (id) => {
  return db.manyOrNone(`SELECT user.name, invitations.rsvp FROM invitations JOIN events ON events.plan_id = invitations.event_id JOIN users ON users.id = invitations.user_id WHERE invitations.event_id = $1`,[id])
}

Event.update = (event, id) => {
   return db.one(`UPDATE events SET name = $1, day=$2, time_begins = $3, time_ends=$4, description=$5, WHERE plan_id = $6 RETURNING *`,[event.title, event.day, event.time_begins, event.time_ends, event.description, id])
}

Event.delete = (id) => {
  return db.none(`DELETE FROM events WHERE plan_id = $1`, [id])
}

module.exports = Event;
