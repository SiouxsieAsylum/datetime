const db = require('../db/config');

const User = {};
User.findAll = () => {
  // this is supposed to get every user that you've invited to an event before.
  return db.query(`SELECT * FROM users`);
}

User.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM users WHERE id = $1`, [id])
}

User.create = (user) => {
  return db.one(`INSERT INTO users (name, phone_number, email) VALUES ($1,$2,$3) RETURNING *`,[user.name, user.phone_number, user.email])
}

User.update = (user, id) => {
   return db.one(`UPDATE users SET (name, phone_number, email) VALUES ($1,$2,$3) RETURNING *`,[user.name, user.phone_number, user.email])
}

User.delete = (id) => {
  return db.none(`DELETE FROM users WHERE id = $1`, [id])
}

module.exports = User;
