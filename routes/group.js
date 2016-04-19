var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('ID is: ' + req.params.id + ', shop name is: 熊大拉麵');
  
  //res.render('index', { title: '889' , name: req.query.name});
  //if(req.accepts('json')) blablabla
  
});

router.get('/', function(req, res, next) {
  res.send('Shop Name: 熊大拉麵');
});
module.exports = router;
