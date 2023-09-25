const Post = require("../models/Post");
const router = require("express").Router();
const bcrypt = require("bcrypt")

// CREATE A POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// 

module.exports = router