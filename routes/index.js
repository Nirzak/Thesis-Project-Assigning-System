const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

/* GET home page. */
router.get('/', forwardAuthenticated, function(req, res, next) {
  res.render('index', { pageTitle: 'Thepro Assigner' });
});

// Dashboard Page routes here
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// Application Page Route
router.get('/application', ensureAuthenticated, (req, res) =>
  res.render('application', {
    user: req.user
  })
);

// Application Status Page Route
router.get('/status', ensureAuthenticated, (req, res) =>
  res.render('status', {
    user: req.user
  })
);

module.exports = router;
