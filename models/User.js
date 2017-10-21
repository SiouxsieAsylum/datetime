const db = require('../db/config');

const User = {};
User.findAll = () => {
  // this is supposed to get every user that you've invited to an event before.
  return db.query(``);
}

User.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM users WHERE id = $1`, [id])
}

User.create = (event) => {
  return db.one(`INSERT INTO users (name, phone_number, email, calendar_id) VALUES ($1,$2,$3,$4) RETURNING *`,[user.name, user.phone_number, user.email, user.calendar_id])
}

User.update = (event, id) => {
   return db.one(`UPDATE users SET (name, phone_number, email, calendar_id) VALUES ($1,$2,$3,$4) RETURNING *`,[user.name, user.phone_number, user.email, user.calendar_id])
}

User.delete = (id) => {
  return db.none(`DELETE FROM users WHERE id = $1`, [id])
}
