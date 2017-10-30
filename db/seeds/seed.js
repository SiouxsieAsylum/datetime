const User = require('../../models/user');
const Event = require('../../models/event');
const Invitation = require('../../models/invitation');
const bcrypt = require('bcryptjs');

const hashes = []

for(let i = 0, i < 2, i++){
  let salt = bcrypt.genSaltSync();
  let hash = bcrypt.hashSync(req.body.password, salt);
  hashes.push(hash);
}

 User.update({"name": "Andrea McKenzie",
                             "phone_number": "9176746154",
                             "email": "mckenzie.andrea.m@gmail.com",
                              "username":"AndreaMcK",
                              "password":"chantal"}, 1);

 User.update({"name":"Anthony Pagan",
                              "phone_number":"7189169523",
                              "email":"a.pagan90@yahoo.com",
                              "username":"APagan",
                              "password":"miggy"}, 2);

 Event.update({"name":"Jane Doe's Birthday",
                               "day":"2017-12-20",
                               "address":"84-09 155ave Howard Beach York 11414",
                               "time_begins":"08:00:00",
                               "time_ends":"11:59:00",
                               "description":"Awesome party for Jane Doe!",
                               "host_id":1}, 1)

// require bcryptjs in here, salt the passwords, and seed away
