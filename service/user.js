var User =require('../modules/user.js');
var userModule={
	insert:function(params,callback){
		var params=params||{
			username:'aikeri',
			password:'123456',
			account:'aikeri',
			createtime:Date.now(),
			updatetime:Date.now()
		}
		var user=new User(params);
		user.save(function(err,res){
			callback(res);
			if(err){
				console.log(err)
			}
		})
	},
	/**
	查询
	condition 条件
	callback 回调
	*/
	find:function(condition,callback){
		User.find(condition,function(err,res){
			callback(res);
			if(err){
				console.log(err)
			}
		})
	},
	/**
	更新
	condition 条件
	callback 回调
	*/
	update:function(condition,callback){
		User.update(condition,function(err,res){
			callback(res);
			if(err){
				console.log(err)
			}
		})
	},
	/**
	删除
	condition 条件
	callback 回调
	*/
	delete:function(condition,callback){
		User.remove(condition,function(err,res){
			callback(res)
			if(err){
				console.log(err)
			}
		})
	}

}
module.exports=userModule;