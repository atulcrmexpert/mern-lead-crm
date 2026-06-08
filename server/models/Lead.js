const mongoose=require('mongoose');
module.exports=mongoose.model('Lead',new mongoose.Schema({
 name:String,email:String,status:{type:String,default:'New'}
},{timestamps:true}));
