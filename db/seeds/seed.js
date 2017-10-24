const User = require('../../models/user');
const Event = require('../../models/Event');
const Invitation = require('../../models/invitation');

const newUser = User.create({"name": "Andrea McKenzie",
                             "phone_number": "9176746154",
                             "email": "mckenzie.andrea.m@gmail.com"});
const newUser2 = User.create({"name":"Anthony Pagan",
                              "phone_number":"7189169523",
                              "email":"a.pagan90@yahoo.com"});

const newUser = User.findById(1);

const newEvent = Event.findById(1);



