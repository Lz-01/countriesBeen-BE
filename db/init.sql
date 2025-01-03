-- Ensure the table exists
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    been_countries TEXT[] DEFAULT '{}',
    lived_countries TEXT[] DEFAULT '{}',
    want_countries TEXT[] DEFAULT '{}'
);

-- Insert default data
INSERT INTO users (email, been_countries, lived_countries, want_countries) VALUES
('john.doe@example.com', '{"Germany", "France"}','{"Germany", "France"}','{"Germany", "France"}'),
('jane.smith@example.com', '{"Spain", "Italy", "Portugal"}', '{"Spain", "Italy", "Portugal"}', '{"Spain", "Italy", "Portugal"}'),
('alex.jones@example.com', '{}','{}','{}'),
('chris.brown@example.com', '{"Canada", "USA"}','{"Canada", "USA"}','{"Canada", "USA"}'),
('emma.wilson@example.com', '{"Japan", "South Korea", "China"}','{"Japan", "South Korea", "China"}','{"Japan", "South Korea", "China"}')
ON CONFLICT (email) DO NOTHING; -- Avoid duplicate entries
