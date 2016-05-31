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
    r.table("Shop").get(id)
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
	
    r.table("Shop")
    .run()
    .then(function (response) {
        res.send(response);
        console.log(response);
    })
    .error(function (err) {
        console.log(err);
    })
});

/* Create a Shop*/
router.post('/', function(req, res, next) {
    
    var r = require('rethinkdbdash')({
        port: 28015,
        host: 'localhost',
        db: 'FoodieTrip'
    });

	var gname = req.query.gname;
	var sname = req.query.sname;
	var gopentime = req.query.gopentime;
	var gclosetime = req.query.gclosetime;
	var amount = req.query.amount;
	var place = req.query.place;
	var arrivetime = req.query.arrivetime;
	var menu = req.query.menu;
	
	r.table("Shop").insert({gname: gname, sname: sname, gopentime: gopentime, gclosetime:gclosetime, amount:amount, place:place, arrivetime:arrivetime, menu:menu})
   .run( function(err, result) {
		if (err) throw err;
			console.log(JSON.stringify(result, null, 2));
    })
	.then(function (response) {
        res.send("Insert succed!");
        console.log("Inserted.");
    })
});
module.exports = router;
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
    r.table("Shop").get(id)
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
	
    r.table("Shop")
    .run()
    .then(function (response) {
        res.send(response);
        console.log(response);
    })
    .error(function (err) {
        console.log(err);
    })
});

/* Create a Shop*/
router.post('/', function(req, res, next) {
    
    var r = require('rethinkdbdash')({
        port: 28015,
        host: 'localhost',
        db: 'FoodieTrip'
    });

	var gname = req.query.gname;
	var sname = req.query.sname;
	var gopentime = req.query.gopentime;
	var gclosetime = req.query.gclosetime;
	var amount = req.query.amount;
	var place = req.query.place;
	var arrivetime = req.query.arrivetime;
	var menu = req.query.menu;
	
	r.table("Shop").insert({gname: gname, sname: sname, gopentime: gopentime, gclosetime:gclosetime, amount:amount, place:place, arrivetime:arrivetime, menu:menu})
   .run( function(err, result) {
		if (err) throw err;
			console.log(JSON.stringify(result, null, 2));
    })
	.then(function (response) {
        res.send("Insert succed!");
        console.log("Inserted.");
    })
});
module.exports = router;
