const fs = require("fs");

const hex = require("./color_regexes").hex;
const rgb = require("./color_regexes").rgb;
const hsl = require("./color_regexes").hsl;

let entryPath = process.argv[2];

fs.readdir(entryPath, 'utf8', (err, files) => {
    if (err) {
        console.log(err);
    }

    files.forEach(file => {
        console.log(file);
    });
});
