const mongoose = require('mongoose');

const FormSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    phone:{
        type:Number,
        required: true,
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Form',FormSchema)