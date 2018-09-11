var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var commontSchema=new Schema({
	content:{type:String},
	blogid:{type:String},
	userid:{type:String},
	username:{type:String},
	createtime:{type:Date}
});

module.exports=mongoose.model('Commont', commontSchema);