const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Supervisor = require('../models/supervisor')
const { ensureAuthenticated } = require('../config/auth');

// Supervisors Profile Page Route goes here
router.get('/supervisors', ensureAuthenticated, (req, res) =>
Supervisor.find({}, function(err, supervisors) {
    res.render('supervisors', {
        user: req.user,
        supervisorsList: supervisors
    })
  })
);

module.exports = router;