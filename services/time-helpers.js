// program that tells the time
let Event = require('../models/event');
const trackAllEvents = (req,res,next){
  let events = Event.findMyEvents(req.params.id);
  for (let e of events) {
    keepTime(e);
  }
}

const keepTime = function(event){
  let now = new Date();

  let targetTime = event.time_begins;
  let targetDate = event.day;

  // break target down
  let targetYear = targetDate.substring(0,4)
  let targetMonth = (parseInt(targetDate.substring(5,7))- 1).toString();
  let targetDay = targetDate.substring(8,10);

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
  console.log("current =" +currentString)

  setInterval(keepTime, 1000)
  return currentString == targetString ? true : false

  next();
}

// program that emails the targets if the times match
module.exports = {
  trackAllEvents;
}
