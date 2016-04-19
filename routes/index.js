var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oh?' , name: req.query.name});
});

// Default back to root


module.exports = router;
