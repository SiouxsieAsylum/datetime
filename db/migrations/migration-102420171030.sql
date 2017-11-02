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



CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
phone_number VARCHAR(10) NOT NULL,
email VARCHAR(255) NOT NULL
--social media accounts to be added later
);

CREATE TABLE IF NOT EXISTS events (
plan_id SERIAL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
day DATE NOT NULL,
time_begins TIME NOT NULL,
time_ends TIME,
description TEXT,
host_id INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS invitations (
  -- do I even need an id? This is supposed to be intrinsically linked to each event. Can a reference to something else be the primary key?
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES events(id),
  user_id INTEGER REFERENCES users(id),
  status VARCHAR(255) DEFAULT 'pending'
);

