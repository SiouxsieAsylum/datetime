ALTER TABLE events ALTER COLUMN host_id integer REFERENCES user.id NOT NULL;
