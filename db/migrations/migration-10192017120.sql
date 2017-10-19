CREATE TABLE IF NOT EXISTS events (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
day DATE NOT NULL,
time_begins TIME NOT NULL,
time_ends TIME,
description TEXT,
attendees INTEGER[], --array of user ids
host_id INTEGER REFERENCES user(id),
)

--foreign key constraint here

CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
phone_number VARCHAR(10) NOT NULL,
email VARCHAR(255) NOT NULL,
--social media accounts to be added later
calendar_id INTEGER REFERENCES user_calendar(id),
)

--foreign key constraint here

CREATE TABLE IF NOT EXISTS user_calendar (
id SERIAL PRIMARY KEY --shouldn't need to be a serial, instantiated when the user is instantiated as well
user_id INTEGER REFERENCES user(id);
events INTEGER[] -- array of event ids
)



--foreign key constraint here
