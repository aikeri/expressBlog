var Commont =require('../modules/commont.js');
var commontModule={
	insert:function(params,callback){
		var commont=new Commont(params);
		commont.save(function(err,res){
			callback(res);
			if(err){
				console.log(err);
			}
		})
	},
	find:function(condition,callback){
		Commont.find(condition,function(err,res){
			callback(res);
			if(err){
				console.log(err);
			}
		})
	},
	update:function(condition,callback){
		Commont.update(condition,function(err,res){
			callback(res);
			if(err){
				console.log(err);
			}
		})
	},
	delete:function(condition,callback){
		Commont.remove(condition,function(err,res){
			callback(res);
			if(err){
				console.log(err);
			}
		})
	}
}
module.exports=commontModule;