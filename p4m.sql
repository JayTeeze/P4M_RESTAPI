-- Create p4m.db for your database in place of this file
-- Use a client or cmd/bash to connect to sqlite3 to open p4m.db

-- Create table:

CREATE TABLE IF NOT EXISTS choice(id INTEGER PRIMARY KEY, name TEXT NOT NULL, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP);



-- Trigger:

CREATE TRIGGER choice_on_update UPDATE ON choice FOR EACH ROW BEGIN UPDATE choice SET updated_at = CURRENT_TIMESTAMP WHERE NEW.id = OLD.id; END;
