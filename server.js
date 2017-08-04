const fs = require("fs-extra");

require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PaletteParser = require("./helpers/palette-parser");
const { gitClone, normalizeGitHubUrl } = require("./helpers/git-utils");

app.use(express.static("./dist"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/colors", (req, res) => {
  const normalizedRepoInfo = normalizeGitHubUrl(req.query.repoUrl);
  const cloneDestination = `./temp/${normalizedRepoInfo.uniqueHash}`;

  console.log(
    `Cloning ${normalizedRepoInfo.repoUri} into ${cloneDestination}\n`
  );
  gitClone(normalizedRepoInfo.httpsCloneUrl, cloneDestination)
    .then(() => {
      console.log("Clone Successful!", "Now Parsing for ColorMap...");
      const parser = new PaletteParser(cloneDestination);
      return parser.generateColorMap();
    })
    .then(colorMap => {
      console.log(`Removing ${cloneDestination}\n`);
      fs
        .remove(cloneDestination)
        .then(() => {
          console.log("Sending ColorMap...\n");
          res.send(JSON.stringify(colorMap));
        })
        .catch(err => {
          console.error(err);
          res.status(500).send("There was an error removing the temp dir.");
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("There was an issue cloning the repo...");
    });
});

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
  console.log(`App listening on port: ${SERVER_PORT}`);
});
