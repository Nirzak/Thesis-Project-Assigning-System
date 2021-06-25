const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Application = require('../models/application');

/* GET Method*/
router.get('/application', ensureAuthenticated, (req, res) =>
  res.render('application', {
    user: req.user
  })
);

// Application Post Method
router.post('/application', (req, res) => {
  const { title, field, description, choice, cgpa } = req.body;
  let errors = [];

  if (!title || !field || !description || !choice || !cgpa) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (errors.length > 0) {
    res.render('/application', {
      errors,
      title,
      field,
      description,
      choice,
      cgpa
    });
  } else {
        const newApp = new Application({
          title,
          field,
          description,
          choice,
          cgpa,
          status: 'Pending'
        });
        newApp.save();
        req.flash(
                  'success_msg',
                  'Your application has been received successfully'
                );
                res.redirect('/application');
  }
});

module.exports = router;
