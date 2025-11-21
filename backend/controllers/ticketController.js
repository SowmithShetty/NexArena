const db = require('../config/db');

exports.bookTicket = (req, res) => {
  const { match_id, seat_number } = req.body;
  const user_id = req.user?.id;

  console.log('Booking request:', { match_id, seat_number, user_id });

  if (!user_id) {
    return res.status(401).send('Unauthorized: No user ID');
  }

  db.query(
    'INSERT INTO tickets (match_id, user_id, seat_number) VALUES (?, ?, ?)',
    [match_id, user_id, seat_number],
    (err) => {
      if (err) {
        console.error('Booking error:', err);
        return res.status(500).send('Booking failed');
      }
      res.send('Ticket booked');
    }
  );
};

exports.myTickets = (req, res) => {
  const user_id = req.user.id;
  db.query('SELECT * FROM tickets WHERE user_id = ?', [user_id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};