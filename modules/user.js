var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var usersSchema=new Schema({
	username:{type:String},
	password:{type:String},
	account:{type:String},
	logindate : { type: Date},
	createtime:{type:Date},
	updatetime:{type:Date}
});

module.exports=mongoose.model('User', usersSchema);