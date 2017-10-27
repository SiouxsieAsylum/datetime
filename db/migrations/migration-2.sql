 ALTER TABLE users ADD username VARCHAR
 ALTER TABLE users ADD password TEXT
 ALTER TABLE users ADD relationship VARCHAR

 ALTER TABLE invitations ADD rsvp INTEGER DEFAULT 0
-- (for how many minutes late (default 0))
-- (900 will be code for not coming)
-- (future improvement: let host set how late you're allowed to rsvp before you're just cut off altogether, )
-- if user, default should be on time (0)

-- biggest questions
-- how to bypass auth for invitees that are not users?
-- how to seed already encrypted passwords (aka how to encrypt in the post request or in the model)
