const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const signupTemplate = new Schema({
    username:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true
      
    },
    password:{
        type:String,
        required:true
      
    },
    password2:{
        type:String,
        required:true
       
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Logintable',signupTemplate)