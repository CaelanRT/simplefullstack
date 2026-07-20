// imports
require('dotenv').config();
const express = require("express");
const cors = require("cors")

// create the app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// port
const port = process.env.port || 3000;

// main entry route
app.get("/", (req, res) => {
    res.send('hello world!');
})

// server listener
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})