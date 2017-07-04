const util = require("util");
const childProcess = require("child_process");
const exec = util.promisify(childProcess.exec)

require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

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
    exec("mkdir ./temp/" + repoUrl)
        .then((output) => {
            res.send("Folder successfully created...");
        })
        .catch((error) => {
            res.send(error);
        });
});

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
    console.log(`App listening on port: ${SERVER_PORT}`);
});
