import mongoose, { Schema } from 'mongoose'


const Userschema=new Schema({
 name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    number:{
        type:Number,
        required:true
    }

})

export default mongoose.model('User', Userschema);