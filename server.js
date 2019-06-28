const fs = require('fs-extra');
const path = require('path');
const mock = require('./mock');

require('dotenv').config();

const admin = require('firebase-admin');
const serviceAccount = require('./project-palette-firebase-adminsdk-x8y6v-57eff859fb.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://project-palette.firebaseio.com',
});

const db = admin.database();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PaletteParser = require('./helpers/palette-parser');
const {gitClone, normalizeGitHubUrl} = require('./helpers/git-utils');

if (process.env.NODE_ENV === 'production') {
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
  });

  app.get('*.css', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
  });
}

app.use(express.static(path.join(__dirname, '/dist')));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(morgan('combined'));

app.get('/api/search', (req, res) => {
  setTimeout(() => {
    const { search } = req.query

    const body = {
      items: mock.items.filter(({name}) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    }

    res.send(JSON.stringify(body));
  }, 2000);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.post('/api/colors', (req, res) => {
  const {
    id,
    httpsCloneURL,
    repoURI,
    pushedDate,
  } = req.body.params;

  const projectRef = db.ref(id);

  projectRef.once('value', data => {
    const project = data.val();

    if (project && project.pushedDate === pushedDate) {
      res.send(project.palette);
    } else {
      const normalizedRepoInfo = normalizeGitHubUrl(httpsCloneURL, repoURI);
      const cloneDestination = `./temp/${normalizedRepoInfo.uniqueHash}`;

      gitClone(normalizedRepoInfo.httpsCloneUrl, cloneDestination)
        .then(() => {
          const parser = new PaletteParser(cloneDestination);
          return parser.generateColorMap();
        })
        .then(colorMap => {
          fs
            .remove(cloneDestination)
            .then(() => {
              projectRef.set({
                pushedDate,
                palette: JSON.stringify(colorMap),
              });

              res.send(JSON.stringify(colorMap));
            })
            .catch(err => {
              console.error(err); // eslint-disable-line no-console
              res.status(500).send('There was an error removing the temp dir.');
            });
        })
        .catch(err => {
          console.error(err); // eslint-disable-line no-console
          res.status(500).send('There was an issue cloning the repo...');
        });
    }
  });
});

const {SERVER_PORT} = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`App listening on port: ${SERVER_PORT}`); // eslint-disable-line no-console
});
