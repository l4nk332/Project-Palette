require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { gitClone } = require("./utils");

app.use(express.static("./dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.post("/colors", (req, res) => {
    const repoUrl = req.body.repoUrl;
    gitClone(repoUrl)
        .then(() => {
            console.log("Clone Successful!");
            res.send("Clone Successful!");
        })
        .catch((err) => {
            console.error(err);
            res.send("There was an issue cloning the repo...");
        });
});

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
    console.log(`App listening on port: ${SERVER_PORT}`);
});
