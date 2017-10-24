const User = require('../../models/user');
const Event = require('../../models/Event');
const Invitation = require('../../models/invitation');

// const newUser = User.create({"name": "Andrea McKenzie",
//                              "phone_number": "9176746154",
//                              "email": "mckenzie.andrea.m@gmail.com"});
// const newUser2 = User.create({"name":"Anthony Pagan",
//                               "phone_number":"7189169523",
//                               "email":"a.pagan90@yahoo.com"});

const newUser = User.findById(1);
console.log(newUser);
const newEvent = Event.findById(1);
console.log(newEvent);

Promise.all([newEvent,newUser])
.then(array => {
  // console.log(array);
  const user = array[0];
  const event = array[1];

  return Invitation.create(user.id, event.id);

})
.then((invitation)=>{
  console.log(invitation);
})
.catch(err =>
  console.log(err)
)

/*
returns this error:
$ node  db/seeds/seed.js
Promise { <pending> }
Promise { <pending> }
SELECT * FROM users WHERE id = 1
SELECT * FROM events WHERE id = 1
N
{ error: syntax error at or near "N"
    at Connection.parseE (/Users/student_105/Desktop/DateTime/node_modules/pg/lib/connection.js:546:11)
    at Connection.parseMessage (/Users/student_105/Desktop/DateTime/node_modules/pg/lib/connection.js:371:19)
    at Socket.<anonymous> (/Users/student_105/Desktop/DateTime/node_modules/pg/lib/connection.js:114:22)
    at emitOne (events.js:115:13)
    at Socket.emit (events.js:210:7)
    at addChunk (_stream_readable.js:266:12)
    at readableAddChunk (_stream_readable.js:253:11)
    at Socket.Readable.push (_stream_readable.js:211:10)
    at TCP.onread (net.js:585:20)
  name: 'error',
  length: 89,
  severity: 'ERROR',
  code: '42601',
  detail: undefined,
  hint: undefined,
  position: '1',
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'scan.l',
  line: '1086',
  routine: 'scanner_yyerror' } */

