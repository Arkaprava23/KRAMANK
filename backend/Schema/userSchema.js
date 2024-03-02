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
<<<<<<< HEAD
=======
    phoneNo: {
        type: String,
        required: true
    },
>>>>>>> 04546eb7d05ec58f099e58f213a795634316f34f
    password: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
=======
    isVarified:{
        type:Boolean,
        default:false,
    }
>>>>>>> 04546eb7d05ec58f099e58f213a795634316f34f
   
});

export const User = mongoose.model('User', userSchema);
