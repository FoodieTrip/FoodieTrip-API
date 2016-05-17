var express = require('express');
var router = express.Router();
var r = require('rethinkdbdash')({
    port: 28015,
    host: 'localhost',
    db: 'FoodieTrip'
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    //res.send('ID is: ' + req.params.id + ', shop name is: 熊大拉麵');
    var id = parseInt(req.params.id);
    r.table("Group").get(id)
  .run()
  .then(function (response) {
      res.send(response);
      console.log(response);
  })
  .error(function (err) {
      console.log(err);
  })
  
});

router.get('/', function (req, res, next) {
    r.table("Group")
    .run()
    .then(function (response) {
        res.send(response);
        console.log(response);
    })
    .error(function (err) {
        console.log(err);
    })

    });
module.exports = router;
