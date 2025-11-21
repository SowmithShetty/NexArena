const express = require('express');
const router = express.Router();
const { getMatches, addMatch } = require('../controllers/matchController');
const auth = require('../middleware/auth');

router.get('/', getMatches);
router.post('/', auth, addMatch);

module.exports = router;