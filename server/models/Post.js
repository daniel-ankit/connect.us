const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        max: 100,
    },
    img: {
        type : String
    },
    likes:{
        type:Array,
        default:[]
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Post", postSchema)