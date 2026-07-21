// imports
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const {clerkMiddleware} = require('@clerk/express')
const router = require('./routes/authRouter');

// create the app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// port
const port = process.env.port || 3000;

// main entry route
app.get("/", (req, res) => {
    res.send('hello world!');
})

// router
app.use("/api/v1", router);

// server listener
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})