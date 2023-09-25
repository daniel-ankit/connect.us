const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// UPDATE USER
router.put("/:id", async (req, res) => {
    // CHECKING FOR THE ID IN OUR DATABASE OR IF USER IS ADMIN
    if (req.body.id === req.params.id || req.body.isAdmin)
    {
        // IF REQUEST BODY CONTAINS PASSWORD
        if (req.body.password)
        {
            try {
                // ENCRYPTING PASSWORD
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            // FINDING THE USER AND UPDATING DETAILS
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("Account has been updated");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
    else {
        // UNAUTHORISED ACCESS
        return res.status(403).json("You cannot update this Account!");
    }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
    // CHECKING FOR THE ID IN OUR DATABASE OR IF USER IS ADMIN
    if (req.body.id === req.params.id || req.body.isAdmin)
    {
        try {
            // FINDING AND DELETING THE ACCOUNT
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted sucessfully!");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
    else {
        // UNAUTHORISED ACCESS
        return res.status(403).json("You cannot delete this Account!");
    }
});

// SEARCH A USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    }
    catch (err) {
        res.status(500).json("User not found!");
    }
});

// FOLLOW A USER
router.put("/:id/follow", async (req, res) => {
    // CHECK IF USER IS NOT TRYING TO FOLLOW HIS OWN ACCOUNT
    if (req.body.id !== req.params.id)
    {
        try {
            const find = await User.findById(req.params.id);
            const current = await User.findById(req.body.id);
            // CHECKING IF USER IS ALREADY FOLLOWED
            if (!find.followers.includes(req.body.id))
            {
                // UPDATING FOLLOWING AND FOLLOWER LISTS
                await find.updateOne({ $push: { followers: req.body.id } });
                await current.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("You have followed the user.");
            }
            else {
                res.status(403).json("You already follow this user.");
            }
        }
        catch (err) {
            res.status(500).json("Error");
        }
    }
    else {
        // ERROR - OWN ACCOUNT DETECTION
        res.status(403).json("You cannot follow yourself.");
    }
});

// UNOFLLOW A USER
router.put("/:id/unfollow", async (req, res) => {
    // CHECK IF USER IS NOT TRYING TO UNFOLLOW HIS OWN ACCOUNT
    if (req.body.id !== req.params.id)
    {
        try {
            const find = await User.findById(req.params.id);
            const current = await User.findById(req.body.id);

            // CHECKING IF USER IS FOLLOWING OR NOT
            if (find.followers.includes(req.body.id))
            {
                await find.updateOne({ $pull: { followers: req.body.id } });
                await current.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("User has been unfollowed.");
            }
            else
            {
                res.status(403).json("You don't follow this user!");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else
    {
        // ERROR - OWN ACCOUNT DETECTION
        res.status(403).json("You cannot unfollow yourself.");
    }
});

module.exports = router;