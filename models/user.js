const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:String,
    age:Number,
    email:String,
    imgsrc:String
})
const User = mongoose.model('user',UserSchema)
module.exports = User