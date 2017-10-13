const express = require('express');

const router = express.Router();

// connect routes
// router.use('/url', handler);

/* GET home page. */
router.get('/', (req, res) => {
  res.end('get');
});

module.exports = router;
