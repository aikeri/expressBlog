var express = require('express');
var router = express.Router();
var user=require('../../service/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

});
router.post('/insert',function(req,res,next){
	var params=req.body;
	user.insert(params,function(err,result){
		res.json(result);
	});
})
router.get('/find',function(req,res,next){
	var params=req.body;
	user.find(params,function(err,result){
		res.send(result);
	})
})




module.exports = router;