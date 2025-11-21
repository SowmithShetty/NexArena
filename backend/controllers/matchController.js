const db = require('../config/db');

exports.getMatches = (req, res) => {
  db.query('SELECT * FROM matches', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addMatch = (req, res) => {
  const { team_a, team_b, match_date, venue, total_seats } = req.body;
  db.query('INSERT INTO matches (team_a, team_b, match_date, venue, total_seats) VALUES (?, ?, ?, ?, ?)',
    [team_a, team_b, match_date, venue, total_seats], err => {
      if (err) return res.status(500).send(err);
      res.send('Match added');
    });
};