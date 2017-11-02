const db = require('../db/config');
const User = {};
// mapbox
// join as
// http://www.dofactory.com/sql/subquery

// to be implementeed
// User.findAllYourFriends = (id) => {
//   return db.manyOrNone(`SELECT * FROM users WHERE users.id = ANY(SELECT invitations.user_id FROM invitations JOIN events ON invitations.event_id = events.plan_id WHERE events.id = ANY(SELECT events.id FROM events JOIN users ON users.id = events.host_id WHERE users.id = $1)`,[req.user.id]);
// }

User.findAllYourHostedEvents = (id) => {
  return db.manyOrNone(`SELECT * FROM invitations JOIN events ON invitations.event_id = events.plan_id JOIN users ON users.id = events.host_id WHERE invitations.user_id = $1;`,[id]);
}
// find events you are invited with or hosting

User.findAllEvents = (id) => {
  return db.manyOrNone(`SELECT * FROM events JOIN invitations ON invitations.event_id = events.plan_id JOIN users on users.id = invitations.user_id WHERE invitations.user_id = $1`, [id]);
}

User.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM users WHERE id = $1`, [id])
}

User.findByUserName = (username) => {
  return db.oneOrNone(`SELECT * FROM users WHERE username = $1`, [username])
}

User.invite = (user) => {
  return db.one(`INSERT INTO users (name, phone_number, email) VALUES ($1,$2,$3) RETURNING *`,[user.name, user.phone_number, user.email])
}

User.create = (user) => {
  return db.one(`INSERT INTO users (name, phone_number, email, username, password) VALUES ($1,$2,$3,$4,$5) RETURNING *`,[user.name, user.phone_number, user.email, user.username, user.password])
}

User.update = (user, id) => {
   return db.one(`UPDATE users SET name = $1 , phone_number = $2, email = $3, username = $4, password = $5 WHERE id = $6 RETURNING *`,[user.name, user.phone_number, user.email, user.username, user.password, id])
}

User.destroy = (id) => {
  return db.none(`DELETE FROM users WHERE id = $1`, [id])
}

module.exports = User;
