require('dotenv').config();
const express = require("express");

const app = express();

const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send('hello world!');
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})