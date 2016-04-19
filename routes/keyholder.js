var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('ID is: ' + req.params.id);
  //res.render('index', { title: '889' , name: req.query.name});
});

router.get('/', function(req, res, next) {
  res.send('Ker Ker Ker');
});
module.exports = router;
