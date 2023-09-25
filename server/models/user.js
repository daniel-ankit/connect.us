const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        max: 100,
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)