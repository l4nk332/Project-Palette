const fs = require("fs");

const readDirAsync = (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err);
            }

            let promises = files.map((file) => {
                return getFile(file);
            });

            Promise.all(promises).then((stuff) => {
                resolve(stuff);
            });
        });
    });
};

const getFile = file => {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(file);
        }, 1000);
    });
};

readDirAsync(__dirname).then(stuff => {
    console.log(stuff);
}).catch(err => {
    console.log(err);
});
