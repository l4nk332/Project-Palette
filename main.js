const readline = require("readline");
const fs = require("fs");
const path = require("path");

const hex = require("./color_regexes").hex;
const rgb = require("./color_regexes").rgb;
const hsl = require("./color_regexes").hsl;

const IGNORE = ['.git', 'node_modules'];

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

const parseDirectory = (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err);
            }

            let parsedFiles = files
                .filter(file => {
                    return !IGNORE.includes(file);
                })
                .map(file => {
                    return determinePathAction(path.resolve(dir, file));
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

const determinePathAction = (fsPath) => {
    return new Promise((resolve, reject) => {
        fs.lstat(fsPath, (err, stats) => {
            if (err) {
                reject(err);
            }

            if (stats.isFile()) {
                resolve(parseFile(fsPath));
            }

            if (stats.isDirectory()) {
                resolve(parseDirectory(fsPath));
            }
        });
    });
};

const formatTerminalOutput = () => {
    let output = Object.keys(colorMap).map((color) => {
        let lines = colorMap[color].map(colorObj => {
            return `${colorObj.filePath}:${colorObj.lineNumber}`;
        }).join(",\n\t");

        return `${color}:\n\t${lines}`;
    }).join("\n\n");

    console.log(output);
};


parseDirectory(__dirname).then(() => {
    formatTerminalOutput();
}).catch(err => {
    console.log(err);
});

