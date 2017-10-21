-- The idea here is to create data bases that relate thusly:
-- Users HAVE MANY events and HAS ONE user_calendar
-- Events HAS ONE host and HAS ONE attendees_of_event table
-- Attendees BELONGS TO event
-- User calendar BELONGS TO user

--I set the foreign keys the way I think they should work in the migration file, but I get different versions of this error:
-- DETAIL:  Key (events_id)=(1) is not present in table "events".
-- psql:../seeds/seed.sql:11: ERROR:  insert or update on table "user_calendar" violates foreign key constraint "user_calendar_events_id_fkey"
--https://dba.stackexchange.com/questions/29147/postgresql-insert-update-violates-foreign-key-constraints

--I assume it's because the key it's attempting to reference doesn't exist yet, but no matter what order I put, something pops up with that key constraint error. Do I have to state references on one if it's stated on the ther? Do I have to create the database and seed it and then migrate a structure that establishes the references? What exactly are the rules that allow for peaceful foreign key establishemnts?


INSERT INTO users(name, phone_number, email, calendar_id) VALUES ('Andrea McKenzie', '9176746154', 'mckenzie.andrea.m@gmail.com', 1);
INSERT INTO users(name, phone_number, email, calendar_id) VALUES ('Anthony Pagan', '7189169523', 'a.pagan90@yahoo.com', 2);


INSERT INTO events (name, day, time_begins, attendees_table_id, host_id) VALUES ('Jane Does Birthday', '2017-20-12', '8:00:00', 1, 1);

INSERT INTO attendees_of_events (event_id, user_id) VALUES (1, 1);
INSERT INTO attendees_of_events (event_id, user_id) VALUES (1, 2);

INSERT INTO user_calendar (user_id, events_id) VALUES (1,1);
INSERT INTO user_calendar (user_id, events_id) VALUES (2,1);

