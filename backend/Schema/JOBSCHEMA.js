const { application } = require('express');
const mongoose= require('mongoose')
const { Schema, model } = mongoose;
const JOB_SCHEMA= new Schema({
    Company_logo:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    Company:{
        type:String,
        required:true
    }, 
    Location:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    },  
    Deadline:{
        type:Date,
        required:true
    },
    range: {
        type:[Number],
        required:true 
    },
    Description:{
        type:String,
        required:true
    },
    PostedOn:{
        type:Date,
        default:Date.now,
    }
 
})


module.exports = model("jobs", JOB_SCHEMA);