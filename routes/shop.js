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
/*
	var s_id = req.query.s_id;
	var sname = req.query.sname;
	var tel = req.query.tel;
	var addr = req.query.addr;
	var pic = req.query.pic;
	var menu = req.query.menu;
	var sopentime = req.query.sopentime;
	var sclosetime = req.query.sclosetime;
	var price_low = req.query.price_low;
	var price_high = req.query.price_high;
	*/
	var s_id = req.body.s_id;
	var sname = req.body.sname;
	var tel = req.body.tel;
	var addr = req.body.addr;
	var pic = req.body.pic;
	var menu = req.body.menu;
	var sopentime = req.body.sopentime;
	var sclosetime = req.body.sclosetime;
	var price_low = req.body.price_low;
	var price_high = req.body.price_high;
	/*
	console.log("Post is: "+req.post);
	res.send("Post is: " +req.post);
	*/
	
	
	r.table("Shop").insert({s_id: s_id, sname: sname, tel:tel, addr:addr, pic:pic, menu:menu, sopentime:sopentime, sclosetime:sclosetime, price_low:price_low, price_high:price_high})
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
