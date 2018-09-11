var Blog =require('../modules/blog.js');
var blogModule={
	insert:function(params,callback){
		var blog=new Blog(params);
		blog.save(function(err,res){
			callback(res);
			if(err){
				console.log(err);
			}
		})
	},
	find:function(condition,callback){
		Blog.find(condition,function(err,res){
			callback(res);
			if(err){
				console.log(err);
			}
		})
	},
	update:function(condition,callback){
		Blog.update(condition,function(err,res){
			callback(res);
			if(err){
				console.log(err);
			}
		})
	},
	delete:function(condition,callback){
		Blog.remove(condition,function(err,res){
			callback(res);
			if(err){
				console.log(err);
			}
		})
	}
}
module.exports=blogModule;