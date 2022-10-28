const mongoose = require('mongoose');

const todoSchema=mongoose.Schema({
    id:Number,
    title:String,
    status:Boolean
})
const Todo=mongoose.model("todo",todoSchema);

module.exports={Todo}