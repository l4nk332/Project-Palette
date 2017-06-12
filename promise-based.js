const readline = require("readline");
const fs = require("fs");

const hex = require("./color_regexes").hex;
const rgb = require("./color_regexes").rgb;
const hsl = require("./color_regexes").hsl;

const ignore = ['.git', 'node_modules'];
let colorMap = {};

const addColor = (colorList, lineNumber, filePath) => {
    colorList.forEach(color => {
        if (Object.keys(colorMap).includes(color)) {
            colorMap[color].push({
                lineNumber: lineNumber,
                filePath: filePath
            });
        } else {
            colorMap[color] = [{
                lineNumber: lineNumber,
                filePath: filePath
            }];
        }
    });
};

const readDirAsync = (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err);
            }

            let parsedFiles = files
                .filter(file => {
                    return !ignore.includes(file);
                })
                .map(file => {
                    return parseFile(file);
                });

            Promise.all(parsedFiles).then(resolve);
        });
    });
};

const parseFile = file => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: fs.createReadStream(file)
        });

        let lineCount = 1;

        rl.on('line', (line) => {
            if (hex(line)) {
                addColor(hex(line), lineCount, file);
            }

            if (rgb(line)) {
                addColor(rgb(line), lineCount, file);
            }

            if (hsl(line)) {
                addColor(hsl(line), lineCount, file);
            }

            lineCount++;
        }).on('close', () => {
            resolve();
        });
    });
};

readDirAsync(__dirname).then(() => {
    console.log(JSON.stringify(colorMap));
}).catch(err => {
    console.log(err);
});
