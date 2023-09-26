const Post = require("../models/Post");
const router = require("express").Router();
const User = require("../models/User");
    
// CREATE A POST
router.post("/", async (req, res) => {
    // CREATING NEW POST
    const newPost = new Post(req.body);
    try {
        // SAVING TO THE DATABASE
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE A POST
router.put("/:id", async (req, res) => {
    try {
        // FINDING THE POST
        const post = await Post.findById(req.params.id);
        // CHECKING IF THE POST BELONGS TO THE USER OR NOT
        if (post.id === req.body.id)
        {
            //UPDATING
            await post.updateOne({ $set: req.body });
            res.status(200).json("The post has been updated.");
        }
        else
        {
            // ANOTHER USER'S POST
            res.status(403).json("You cannot update this post!");
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE A POST
router.delete("/:id", async (req, res) => {
    try {
        // FINDING THE POST
        const post = await Post.findById(req.params.id);
        // CHECKING IF THE POST BELONGS TO THE USER OR NOT
        if (post.id === req.body.id)
        {
            // DELETING
            await post.deleteOne();
            res.status(200).json("The post has been deleted.");
        }
        else
        {
            // ANOTHER USER'S POST
            res.status(403).json("You cannot delete this post!");
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// LIKE - DISLIKE A POST
router.put("/:id/like", async (req, res) => {
    try {
        // FINDING THE POST
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.id))
        {
            // LIKING POST IF NOT LIKED
            await post.updateOne({$push:{likes: req.body.id}});
            res.status(200).json("The post has been liked.");
        }
        else
        {
            // DISLIKING POST IF LIKED
            await post.updateOne({$pull:{likes: req.body.id}});
            res.status(200).json("The post has been disliked.");
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// FIND POST
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    }
    catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// GET TIMELINE
router.get("/timeline/all", async (req, res) => {
    try {
      const currentUser = await User.findById(req.body.id);
      const userPosts = await Post.find({ id: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ id: friendId });
        })
      );
      const timelinePosts = userPosts.concat(...friendPosts)
      res.json(timelinePosts);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
  });

module.exports = router


// 65131ce1ec30e3782634be04 - USER1
    // 65131eaf96c990575ac06f16
    // 65131eb996c990575ac06f18

// 65131cf9ec30e3782634be09 - USER2
    // 65131ec596c990575ac06f1a
    // 65131ecc96c990575ac06f1c