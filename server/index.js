const express = require("express")
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose');
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Listening at ${process.env.PORT}`);
})