var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var Users=new Schema({
	username:String,
	password:String,
	account:String,
	createtime:{
		type:Date,
		default:Date.now()
	},
	updatetime:{
		type:Date,
		default:Date.now()
	}
});
Users.pre('save',function(next){
	if(this.isNew){
		this.createTime=this.updateTime=Date.now();
	}else{
		this.updateTime=Date.now();
	}
})
Users.statics={
	fetch:function(callback){
		this.find().sort('updateTime').exec(callback);
	},
	findById:function(id,callback){
		this.findOne({_id:id}).exec(callback);
	},
	insert:function(callback){
		this.insert({username:'aikeri',password:'123456',account:'aikeri',createtime:Date.now(),updatetime:Date.now()}).exec(callback);
	}
}
module.exports=mongoose.model('Users', Users);