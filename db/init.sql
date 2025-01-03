-- Ensure the table exists
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    visited_countries TEXT[] DEFAULT '{}'
);

-- Insert default data
INSERT INTO users (email, visited_countries) VALUES
('john.doe@example.com', '{"Germany", "France"}'),
('jane.smith@example.com', '{"Spain", "Italy", "Portugal"}'),
('alex.jones@example.com', '{}'),
('chris.brown@example.com', '{"Canada", "USA"}'),
('emma.wilson@example.com', '{"Japan", "South Korea", "China"}')
ON CONFLICT (email) DO NOTHING; -- Avoid duplicate entries
