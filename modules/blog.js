var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var blogSchema=new Schema({
	title:{type:String},
	content:{type:String},
	author:{type:String},
	authorid:{type:String},
	viewcount : { type: Number},
	createtime:{type:Date},
	updatetime:{type:Date},
	category:{type:String},
	categoryid:{type:String}
});

module.exports=mongoose.model('Blog', blogSchema);