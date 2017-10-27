# DateTime
## Created by Andrea McKenzie

## Description

This is the first version of an application meant to make planning events easier. This way, everyone knows who is coming to any event you set, and when. 

## MVP

A user authenticated app where you can CRUD events and invite people to them, and that will email (bonus: notify!) you when the event is close.  

## Wireframes

![Wireframes](public/images/wireframes.png) 

## Format/Pages Necessary

### Home Page
  * A calendar that can be touched/clicked
  * A feed  of changes to any of your events since you last logged in

### Profile Page
  * Picture/Name/Etc.
  * A list of events you are a part of/hosting
  * Tabs of events 

### Event Page
  * Picture(optional), Title
  * Where, When, Start Time, End Time(optional)
  * Google Map of Location of event

### Login/Register pages

### Landing page 

### Create Event page
- [How to upload a photo](https://stackoverflow.com/questions/31353703/how-to-upload-image-file-from-computer-and-set-as-div-background-image-using-jqu)



## Bonus Features

  * Admin verification

... All attendees can make changes to event name, date, time, and whereabouts, but only admins of each event can approve those changes. 

  * Notification feed

... The home, event, and user page comes with an automatic  feed that allows for updates on every change within the event, especially RSVP changes
... You can "mute" events to unsubscribe so they don't get push notifications 

  * Push Notifications 
... all RSVP changes, event changes, etc

## Tech and extra packages required/desired

- [Google Calendar API](https://developers.google.com/google-apps/calendar/quickstart/nodejs) <-- bonus! (looks really complex tbh)
- [Google Maps API](https://developers.google.com/maps/documentation/embed/guide)
- [Node push notifications](https://www.npmjs.com/package/node-pushnotifications) <-- bonus! gonna try to implement for android and ios
- [Authentication] <-- Pleaaaase tell me where my filepath went wrong in my heroku deployment for the to-do app because I got auth to work perfectly fine but now it's unusable
- [Express Mailer](https://www.npmjs.com/package/express-mailer)
