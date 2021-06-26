const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Application = require('../models/application')
const { ensureAuthenticated } = require('../config/auth');


// Application Status Page Route
router.get('/status', ensureAuthenticated, (req, res) =>
Application.find({}, function(err, applications) {
  res.render('status', {
      user: req.user,
      applicationsList: applications
  })
})
);
module.exports = router;
