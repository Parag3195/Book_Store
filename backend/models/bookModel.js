import mongoose from "mongoose";

const bookschema = mongoose.Schema({
   title:{
    type:String,
    required:true,
   } ,
   author:{
    type:String,
    required:true,
   },
   publishYear:{
    type:Number,
    required:true,
   },
   img:{
    type:String,
    required:true,
   }
});

export const Book= mongoose.model("book",bookschema);