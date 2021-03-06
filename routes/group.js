var express = require('express');
var router = express.Router();

/* GET sepcific group inform */
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

/* Insert into db : Join a group */
router.post('/:id', function(req, res, next) {
    
    var r = require('rethinkdbdash')({
        port: 28015,
        host: 'localhost',
        db: 'FoodieTrip'
    });

    var id = parseInt(req.params.id);
	var order_name = req.query.order_name;
	var order = req.query.order;
	var num = req.query.num;
	
	r.table("Order").insert({g_id: id, order_name: order_name, order: order, num: num})
   .run( function(err, result) {
		if (err) throw err;
			console.log(JSON.stringify(result, null, 2));
    })
	.then(function (response) {
        res.send("Insert succed!");
        console.log("Inserted.");
    })
});


/* GET all group list */
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

/* Create a group*/
router.post('/', function(req, res, next) {
    
    var r = require('rethinkdbdash')({
        port: 28015,
        host: 'localhost',
        db: 'FoodieTrip'
    });
/*
	var gname = req.query.gname;
	var sname = req.query.sname;
	var gopentime = req.query.gopentime;
	var gclosetime = req.query.gclosetime;
	var amount = req.query.amount;
	var place = req.query.place;
	var arrivetime = req.query.arrivetime;
	var menu = req.query.menu;
	
	console.log(req.query);*/
	
	
	var gname = req.body.gname;
	var sname = req.body.sname;
	var gopentime = req.body.gopentime;
	var gclosetime = req.body.gclosetime;
	var amount = req.body.amount;
	var place = req.body.place;
	var arrivetime = req.body.arrivetime;
	var menu = req.body.menu;
	
	
	r.table("Group").insert({gname: gname, sname: sname, gopentime: gopentime, gclosetime:gclosetime, amount:amount, place:place, arrivetime:arrivetime, menu:menu})
   .run( function(err, result) {
		if (err) throw err;
			console.log(JSON.stringify(result, null, 2));
    })
	.then(function (response) {
        res.send(req.body);
        console.log(req.body);
    })
});
	
module.exports = router;