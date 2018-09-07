var express = require('express');
var router = express.Router();
var users=require('../../modules/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.fetch(function(err,data){
  	console.log(err);
	res.send('respond with a resource'+data);
  })
});
router.get('/insert',function(){
	users.insert(function(err,data){
		console.log(err);
		res.send(data);
	})
})




module.exports = router;