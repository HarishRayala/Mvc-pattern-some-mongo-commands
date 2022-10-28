const mongoose = require('mongoose');

// to connect through env we need to install npm i dotenv
// in place or mongo url we need to use process.env.MONGODB_URL
const connection=mongoose.connect("mongodb+srv://Mongodb:2379@cluster0.zhnbabq.mongodb.net/?retryWrites=true&w=majority");


module.exports={connection}