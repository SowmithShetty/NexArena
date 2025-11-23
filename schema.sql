CREATE DATABASE football_ticket_db;
USE football_ticket_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin', 'customer') DEFAULT 'customer'
);

CREATE TABLE matches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  team_a VARCHAR(100),
  team_b VARCHAR(100),
  match_date DATE,
  venue VARCHAR(100),
  total_seats INT
);

CREATE TABLE tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  match_id INT,
  user_id INT,
  seat_number INT,
  status ENUM('booked', 'cancelled') DEFAULT 'booked',
  FOREIGN KEY (match_id) REFERENCES matches(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO matches (team_a, team_b, match_date, venue, total_seats)
VALUES ('Team A', 'Team B', '2025-12-01', 'Stadium X', 100);
DELETE FROM matches
WHERE team_a = 'Team A'
  AND team_b = 'Team B'
  AND match_date = '2025-12-01'
  AND venue = 'Stadium X'
  AND total_seats = 100;
  DELETE FROM matches
WHERE id = 1; -- replace 1 with the actual ID
INSERT INTO users (name, email, password, role) VALUES
('Alice Johnson', 'alice.johnson@example.com', '111', 'customer'),
('Bob Smith', 'bob.smith@example.com', '112', 'customer'),
('Charlie Lee', 'charlie.lee@example.com', '113', 'admin'),
('Diana Evans', 'diana.evans@example.com', '114', 'customer'),
('Ethan Wright', 'ethan.wright@example.com', '115', 'customer');
INSERT INTO matches (team_a, team_b, match_date, venue, total_seats) VALUES
('Manchester United', 'Chelsea', '2025-12-01', 'Old Trafford', 74000),
('Arsenal', 'Liverpool', '2025-12-05', 'Emirates Stadium', 60260),
('Manchester City', 'Tottenham Hotspur', '2025-12-10', 'Etihad Stadium', 53400),
('Newcastle United', 'Aston Villa', '2025-12-15', 'St James Park', 52305),
('West Ham United', 'Everton', '2025-12-20', 'London Stadium', 62500);
SELECT * FROM users;
SELECT * FROM matches;
select * from tickets;
INSERT INTO matches (team_a, team_b, match_date, venue, total_seats) VALUES
('Brighton & Hove Albion', 'Crystal Palace', '2025-12-22', 'Amex Stadium', 31850),
('Leeds United', 'Southampton', '2025-12-26', 'Elland Road', 37908),
('Leicester City', 'Wolverhampton Wanderers', '2025-12-28', 'King Power Stadium', 32312),
('Nottingham Forest', 'Brentford', '2025-12-30', 'City Ground', 30445);
delete from tickets where id=3;