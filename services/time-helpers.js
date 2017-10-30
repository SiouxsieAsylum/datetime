// program that tells the time
// what you can do is take the event info when each page loads, and then just keep it running as long as possible
// gta talk about how to keep it running in the back end

// clicking on Invite Users should render the invitation file
// https://github.com/foreverjs/forever
// https://javascript.info/promise-chaining

const Event = require('../models/event');
const eventController = require('../controllers/event-controllers')
const express = require('express');
const expressMailer = require('express-mailer');
const savedInfo = "";

// const saveDatInfo = () => {
//  return new Promise(function(resolve,reject){
//   setTimout(Function(){
//     resolve(Event.findAll())
//   })
//  })
// }

const keepTime = function(event){
  let now = new Date();

  let targetTime = event.time_begins;

  // break target down
  let targetYear = event.day.getFullYear();
  let targetMonth = event.day.getMonth();
  let targetDay = event.day.getDate();

  let targetHour = targetTime.substring(0,2);
  let targetMinute = targetTime.substring(3,5);

  // break currenttime down
  let currentYear = now.getFullYear();
  let currentMonth = now.getMonth();
  let currentDay = now.getDate();

  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();

  let currentString = `${currentYear} ${currentMonth} ${currentDay} ${currentHour} ${currentMinute}`;
  let targetString = `${targetYear} ${targetMonth} ${targetDay} ${targetHour} ${targetMinute}`;

  console.log("target = "+targetString);
  console.log("current = " +currentString)

  setInterval(keepTime, 1000)
  return currentString == targetString ? alert("It is time") : console.log("not yet")

  next();
}

// program that emails the targets if the times match

// const sendItsStarting = function(event) => {
//   const name = event.name;
//   const start = event.time_begins;
//   const end = event.time_ends;
//   const address = event.address;
// }

module.exports = {
  // saveDatInfo
  // cycleThrough
}
