ALTER TABLE events ALTER COLUMN host_id INTEGER REFERENCES users.id NOT NULL;
