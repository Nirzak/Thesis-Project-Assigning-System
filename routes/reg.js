const express = require('express');
const router = express.Router();

/* GET Student Sign Up Page */
router.get('/signup', function(req, res, next) {
  res.render('auth/studentReg', { pageTitle : 'Student Registration' });
});

router.get('/supervisor-signup', function(req, res, next) {
    res.render('auth/supervisorReg', { pageTitle : 'Supervisor Registration' });
  });

module.exports = router;