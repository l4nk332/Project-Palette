const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('Root route...');
});

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
    console.log(`App listening on port: ${SERVER_PORT}`);
});
