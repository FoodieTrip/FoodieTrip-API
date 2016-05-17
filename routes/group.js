var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    
    var r = require('rethinkdbdash')({
        port: 28015,
        host: 'localhost',
        db: 'FoodieTrip'
    });

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
    var r = require('rethinkdbdash')({
        port: 28015,
        host: 'localhost',
        db: 'FoodieTrip'
    });

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
