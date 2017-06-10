const readline = require("readline");
const fs = require("fs");
const path = require("path");

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

const parseFile = (filePath) => {
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath)
    });

    let lineCount = 1;

    rl.on('line', (line) => {
        if (hex(line)) {
            addColor(hex(line), lineCount, filePath);
        }

        if (rgb(line)) {
            addColor(rgb(line), lineCount, filePath);
        }

        if (hsl(line)) {
            addColor(hsl(line), lineCount, filePath);
        }

        lineCount++;
    }).on('close', () => {
        console.log(JSON.stringify(colorMap));
    });
};

const determineFilePathAction = (filePath) => {
    fs.lstat(filePath, (err, stats) => {
        if (err) {
            console.error(err);
        }

        if (stats.isFile()) {
            parseFile(filePath);
        }

        if (stats.isDirectory()) {
            parseDirectory(filePath);
        }
    });
};

const parseDirectory = (directoryPath) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(err);
        }

        files.forEach(file => {
            if (!ignore.includes(file)) {
                determineFilePathAction(path.resolve(directoryPath, file));
            }
        });
    });
};

parseDirectory(__dirname);
