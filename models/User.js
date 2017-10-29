const db = require('../db/config');
const User = {};
// mapbox
// join as
// http://www.dofactory.com/sql/subquery

User.findAllYourFriends = (id) => {
  return db.manyOrNone(`SELECT * FROM users WHERE users.id = ANY(SELECT invitations.user_id FROM invitations JOIN events ON invitations.event_id = events.id WHERE events.id = ANY(SELECT events.id FROM events JOIN users ON users.id = events.host_id WHERE users.id = 1));`);
}

User.findAllYourHostedEvents = (id) => {
  return db.manyOrNone(`SELECT * FROM invitations JOIN events ON invitations.event_id = events.id JOIN users ON users.id = events.host_id WHERE invitations.user_id = 1;`,[id]);
}
// find events you are invited with or hosting

User.findAllEvents = (id) => {
  return db.manyOrNone(`SELECT * FROM events JOIN invitations ON invitations.event_id = events.id JOIN users on users.id = invitations.user_id WHERE invitations.user_id = $1`, [id]);
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
