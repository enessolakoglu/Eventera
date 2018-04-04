var mongoose=require("mongoose");

var Schema=mongoose.Schema;

var category=new Schema(
    {
        cId : String,
        cName : String
    }

);



var Category=mongoose.model('category',category);

module.exports=Category;