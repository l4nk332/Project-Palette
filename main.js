const readline = require("readline");
const fs = require("fs");

const hex = require("./color_regexes").hex;
const rgb = require("./color_regexes").rgb;
const hsl = require("./color_regexes").hsl;

let entryPath = process.argv[2];

const rl = readline.createInterface({
    input: fs.createReadStream(entryPath)
});

let lineCount = 1;

rl.on('line', (line) => {
    if (hex(line)) {
        console.log(`${lineCount}: ${hex(line)}`);
    }

    if (rgb(line)) {
        console.log(`${lineCount}: ${rgb(line)}`);
    }

    if (hsl(line)) {
        console.log(`${lineCount}: ${hsl(line)}`);
    }

    lineCount++;
});
