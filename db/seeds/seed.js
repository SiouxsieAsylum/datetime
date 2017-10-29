const User = require('../../models/user');
const Event = require('../../models/Event');
const Invitation = require('../../models/invitation');

const newUser = User.create({"name": "Andrea McKenzie",
                             "phone_number": "9176746154",
                             "email": "mckenzie.andrea.m@gmail.com"});
const newUser2 = User.create({"name":"Anthony Pagan",
                              "phone_number":"7189169523",
                              "email":"a.pagan90@yahoo.com"});
const newEvent = Event.create({"name":"Jane Doe's Birthday",
                               "day":"2017-12-20",
                               "address":"84-09 155ave Howard Beach York 11414",
                               "time_begins":"08:00:00",
                               "time_ends":"11:59:00",
                               "description":"Awesome party for Jane Doe!",
                               "host_id":1})

