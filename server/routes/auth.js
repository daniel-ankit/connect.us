const { response } = require("express");

const router = require("express").Router();

router.get("/", (req, res)=>{
    res.send("Auth Routes")
})

module.exports = router