const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../models/student');
const { forwardAuthenticated } = require('../config/auth');

/* GET home page. */
router.get('/login', forwardAuthenticated, function(req, res, next) {
  res.render('auth/login', { pageTitle : 'Thepro Assigner - Login' });
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
});

module.exports = router;