const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { forwardAuthenticated } = require('../config/auth');
const User = require('../models/student');

/* GET Student Sign Up Page */
router.get('/signup', forwardAuthenticated, function(req, res, next) {
  res.render('auth/studentReg', { pageTitle : 'Registration' });
});

// Register Post Method
router.post('/signup', (req, res) => {
  const { name, email, reg, session, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !reg || !session || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('auth/studentReg', {
      pageTitle : 'Registration',
      errors,
      name,
      email,
      reg,
      session,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('auth/studentReg', {
          pageTitle : 'Registration',
          errors,
          name,
          email,
          reg,
          session,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          reg,
          session,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

module.exports = router;