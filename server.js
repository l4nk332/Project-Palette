require('dotenv').config();

const express = require("express");
const app = express();

app.use(express.static('./dist'));

app.get("/", (req, res) => {
    res.render('index.html');
});

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
    console.log(`App listening on port: ${SERVER_PORT}`);
});
