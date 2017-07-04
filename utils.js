const childProcess = require("child_process");

const gitClone = (url) => {
    return new Promise((resolve, reject) => {
        childProcess.exec('git clone ' + url, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        });
    });
};

module.exports = {
    gitClone
};
