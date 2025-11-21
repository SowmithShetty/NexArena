const express = require('express');
const router = express.Router();
const { bookTicket, myTickets } = require('../controllers/ticketController');
const auth = require('../middleware/auth');

router.post('/book', auth, bookTicket);
router.get('/my', auth, myTickets);

module.exports = router;