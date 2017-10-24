--this is the code that seeded my invitations table finally I did not run this from the file. Now to figure out how to replicate it

--use that ajax post request thingie to add multiple users?
--or page reload

-- INSERT INTO invitations (event_id,user_id)
-- SELECT events.id,users.id FROM events
-- JOIN users ON events.host_id = users.id
-- WHERE events.id = 1 AND users.id = 1
-- ;

--  join mostly for reading , i.e. see a users events, join user, etc
-- after sql queries, package them into pg promise ops the way you do with all models

