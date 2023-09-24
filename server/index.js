const express = require("express");
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res)=>{
    res.send("Welcome to Homepage");
})

app.get("/users", (req, res)=>{
    res.send("Welcome to Users");
})

app.listen(3000, ()=>{
    console.log(`Listening at 3000`);
})