# Tech Needs
### Someone remind me to get a prepaid SIM card for the spare phone <3

## API 

  * Google Maps API (direction);
  * Google Calendar API (calendar? Or saving to personal account)
  * Slack, Facebook, Skype (collecting people)

## Models

  * User profile

...   Profile Picture
... Name(nn)
... Facebook Profile/Slack/Skype/Number(nn)/Email(nn)
... User_Calendar_Id(nn) <!-- (one person HAS MANY EVENTS) -->
... Profile_ID(nn) (foreign key for events)

  * User Calendar
... Calendar_ID(nn)(calendar BELONGS TO user id)
... Events (array of event_IDs)

  * Events 
... Name(nn)
... Date
... Time begins(nn)
... Time Ends
... Description
... attendies (array of user_ids)

## ViewGroups 

  * Profile
    ... has two tabs for notifications based on events or friends
    ... eg("Eva's wedding has 8 rsvp changes" or "Eva will be late to blah")
  * Event

## Partials
  * User Form
  ... <Option to connect with?>
  ... Name*
  ... Email*
  ... Phone Number*
  ... Bio
  ... Consent

    * Profile Form

    ... Name*
    ... Date*
    ... Time start*
    ... Time end
    ... Description
    ... Consent to Notifications
    ... Pick Attendees from users
    ... Add attendies that are not users


