const mongoose = require('mongoose');

//creation of table
const inquirySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

});

//compiling the sc hema into model
 
module.exports = mongoose.model('InquirySchema', inquirySchema); 