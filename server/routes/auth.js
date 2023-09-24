const { response } = require("express");
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt")

// REGISTER
router.post("/register", async(req, res)=>{
    try{
        // HASHING PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPasswrd = await bcrypt.hash(req.body.password, salt)

        // CREATING NEW USER
        const newUser = new User({
            userName : req.body.userName,
            password : hashedPasswrd,
            email : req.body.email
        })

        // SAVING TO THE DATABASE
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err) {
        res.status(500).json(err);
    }
})

// LOGIN 
router.post("/login", async(req, res)=>{
    try{
        // CHECKING IF USER EXISTS
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("User not found!");

        // CHECKING FOR VALID PASSWORD
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong Password");
        
        res.status(200).json(user);
    }
    catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router