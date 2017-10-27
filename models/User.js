const db = require('../db/config');
// mapbox
// join as
// http://www.dofactory.com/sql/subquery



const User = {};
User.findAllYourFriends = (id) => {
  // return db.query(`SELECT * FROM users JOIN invitations`);
}

// doesn't work.
// find all users names that match ids that are joined in invitations to events that match ids of events whose host_id matches yours

// User.findAllYourHostedEvents = (id) => {
//   return db.manyOrNone(`SELECT * FROM invitations JOIN events ON invitations.event_id = events.id JOIN users ON users.id = events.host_id WHERE invitations.user_id = 1;`,[id]);
// }

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
