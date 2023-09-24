const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        require : true,
        min:3,
        max:20,
        unique : true
    },
    email : {
        type : String,
        
    }
})