INSERT INTO events (name, day, time_begins, attendees, host_id) ) VALUES ('Jane Does Birthday', '2017-20-12', '8:00:00', [1,2], 1)

INSERT INTO user_calendar (user_id, events) VALUES (1,[1])
INSERT INTO user_calendar (user_id, events) VALUES (2,[1])

INSERT INTO users(name, phone_number, email, calendar_id) VALUES ('Andrea McKenzie', '9176746154', "mckenzie.andrea.m@gmail.com", 1)
INSERT INTO users(name, phone_number, email, calendar_id) VALUES ('Anthony Pagan', '7189169523', "a.pagan90@yahoo.com", 2)
