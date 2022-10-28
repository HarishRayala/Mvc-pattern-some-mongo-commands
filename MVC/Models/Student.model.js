const mongoose = require('mongoose');

const studentSchema=mongoose.Schema({
    name:String,
    age:{type:Number,require:true},
    course:String
})
const Student=mongoose.model("student",studentSchema);

module.exports={Student}