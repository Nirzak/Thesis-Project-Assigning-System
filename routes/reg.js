var express = require('express');
var router = express.Router();

/* GET Student Sign Up Page */
router.get('/student-signup', function(req, res, next) {
  res.render('auth/studentReg', { pageTitle : 'Student Registration' });
});

router.get('/supervisor-signup', function(req, res, next) {
    res.render('auth/supervisorReg', { pageTitle : 'Supervisor Registration' });
  });

module.exports = router;