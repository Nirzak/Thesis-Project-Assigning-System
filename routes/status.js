const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
/* GET users listing. */
router.get('/status', ensureAuthenticated, (req, res) =>
  res.render('status', {
    user: req.user
  })
);

module.exports = router;