 -- CREATE TABLE IF NOT EXISTS relationships (
 --    id SERIAL PRIMARY KEY;
 --    user_id INTEGER REFERENCES users.id NOT NULL,
 --    friend_id INTEGER REFERENCES users.id NOT NULL,
 --    relationship VARCHAR NOT NULL,
 --  );

 -- ALTER TABLE users ADD username VARCHAR;
 -- ALTER TABLE users ADD password TEXT;

 ALTER TABLE invitation ADD relationship VARCHAR;
 -- ALTER TABLE invitations ADD rsvp INTEGER DEFAULT 0;

 -- ALTER TABLE events ADD address VARCHAR;
-- (for how many minutes late (default 0))
-- (900 will be code for not coming)
-- (future improvement: let host set how late you're allowed to rsvp before you're just cut off altogether, )
-- if user, default should be on time (0)

-- biggest questions
-- how to bypass auth for invitees that are not users?
-- how to seed already encrypted passwords (aka how to encrypt in the post request or in the model)
