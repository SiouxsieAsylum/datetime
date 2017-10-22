const db = require('../db/config');

const Event = {};

Event.findAll = () => {
  // this is supposed to get all events where its id is inside the user calendar if a specific user.
  // maybe handle authentication somewhere else?
  return db.query(`SELECT * FROM events JOIN userCalendar ON  events.id = ANY (userCalendar) JOIN user ON userCalendar = user_id WHERE events.id = ANY (userCalendar) AND user.id = userCalendar = user_id `);
}

Event.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM events WHERE id = $1`, [id])
}

Event.create = (event) => {
  return db.one(`INSERT INTO events (name, day, time_begins, time_ends, description, attendees, host_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,[event.name, event.day, event.time_begins, event.time_ends, event.description, event.attendees, event.host_id])
  // I have no idea if this will work
  return db.one(`INSERT INTO user_calendar (user_id, event_id) VALUES ($1, $2) RETURNING *`, [event.host_id, event.id,])
}

Event.update = (event, id) => {
   return db.one(`UPDATE events SET (name, day, time_begins, time_ends, description, attendees, host_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,[event.name, event.day, event.time_begins, event.time_ends, event.description, event.attendees, event.host_id, id])
}

Event.delete = (id) => {
  return db.none(`DELETE FROM events WHERE id = $1`, [id])
  return db.none(`DELETE FROM user_calendar WHERE event_id = $1`, [id])
}
