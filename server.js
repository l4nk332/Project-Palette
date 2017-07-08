require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { generateColorMap, normalizeGitHubUrl } = require("./main");
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
    const normalizedRepoInfo = normalizeGitHubUrl(req.body.repoUrl);
    const cloneDestination = `./temp/${normalizedRepoInfo.uniqueHash}`;
    gitClone(normalizedRepoInfo.httpsCloneUrl, cloneDestination)
        .then(() => {
            console.log("Clone Successful!", "Now Parsing...");
            return generateColorMap(cloneDestination);
        })
        .then((colorMap) => {
            res.send(JSON.stringify(colorMap));
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("There was an issue cloning the repo...");
        });
});

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
    console.log(`App listening on port: ${SERVER_PORT}`);
});
