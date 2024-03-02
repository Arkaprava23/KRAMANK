import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    isVarified:{
        type:Boolean,
        default:false,
    }
   
});

export const User = mongoose.model('User', userSchema);
