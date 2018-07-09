const childProcess = require('child_process');
const crypto = require('crypto');
const shortid = require('shortid');

const GIT_BIN_PATH = childProcess.execSync('which git', {encoding: 'utf8'}).trim();

const gitClone = (url, clonePath) => (
  new Promise((resolve, reject) => {
    childProcess.execFile(
      GIT_BIN_PATH,
      ['clone', url, clonePath],
      err => {
        if (err) {
          reject(err);
        } else {
          resolve(clonePath);
        }
      },
    );
  })
);

const normalizeGitHubUrl = (httpsCloneUrl, repoUri) => {
  const hashedUri = crypto.createHmac('sha256', repoUri).digest('hex');
  const uniqueHash = `${hashedUri}${shortid.generate()}`;

  return {
    httpsCloneUrl,
    repoUri,
    hashedUri,
    uniqueHash,
  };
};

module.exports = {
  gitClone,
  normalizeGitHubUrl,
};
