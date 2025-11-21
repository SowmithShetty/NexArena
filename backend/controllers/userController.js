const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashed], err => {
    if (err) return res.status(500).send(err);
    res.send('User registered');
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) return res.status(400).send('Invalid credentials');
    const user = results[0];
    if (!bcrypt.compareSync(password, user.password)) return res.status(400).send('Invalid credentials');
    const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey');
    res.json({ token });
  });
};