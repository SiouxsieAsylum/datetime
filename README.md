# DateTime
## Created by Andrea McKenzie

## Description

This is the first version of an application meant to make planning events easier. This way, everyone knows who is coming to any event you set, and when. 

## MVP

A user authenticated app where you can CRUD events 

## Original MVP before reality set in 

A user authenticated app where you can CRUD events and invite people to them, and that will email (bonus: notify!) you when the event is close.  

## Wireframes

![Wireframes](public/images/wireframes.jpg) 

## Installation protocol 

  * Fork and clone this repository
  * run `npm install`
  * run `npm run start` to use or `npm run dev` to tinker


## Technologies used 

- Authentication with `passport`
- Postgresql database
- Express on Node.js 
- EJS view engine

## Primary learning opportunities taken

- Upon deployment, filepaths are case-sensitive
- Git does not change the title of nodes unless you change it in the bash
- You can chain multiple SQL queries and subqueries in one model function
   eg:
   ```SQL
   Event.create = (event) => {
  db.none(`INSERT INTO events (title, day, address, time_begins, time_ends, description, host_id) VALUES ($1,$2,$3,$4,$5,$6,$7)`,[event.title, event.day, event.address, event.time_begins, event.time_ends, event.description, event.host_id])
  db.none(`INSERT INTO invitations (event_id, user_id) values ((SELECT plan_id FROM events WHERE host_id = $1 ORDER BY plan_id DESC LIMIT 1), $1);`,[event.host_id]);
  return db.one(`SELECT * FROM events WHERE host_id = $1 ORDER BY plan_id DESC LIMIT 1;`,[event.host_id]);
    }
   ``` 
- Promise values cannot be accessed outside the fetch request


## Bonus Features - future

  * Admin verification

... All attendees can make changes to event name, date, time, and whereabouts, but only admins of each event can approve those changes. 

  * Notification feed

... The home, event, and user page comes with an automatic  feed that allows for updates on every change within the event, especially RSVP changes
... You can "mute" events to unsubscribe so they don't get push notifications 

  * Push Notifications 
... all RSVP changes, event changes, etc

  * Invite users on event create/edit/show page

## Tech and extra packages planned for future versions
- [How to upload a photo](https://stackoverflow.com/questions/31353703/how-to-upload-image-file-from-computer-and-set-as-div-background-image-using-jqu)
- [Google Calendar API](https://developers.google.com/google-apps/calendar/quickstart/nodejs) <-- bonus! (looks really complex tbh)
- [Google Maps API](https://developers.google.com/maps/documentation/embed/guide)
- [Node push notifications](https://www.npmjs.com/package/node-pushnotifications) <-- bonus! gonna try to implement for android and ios
- [Express Mailer](https://www.npmjs.com/package/express-mailer)
