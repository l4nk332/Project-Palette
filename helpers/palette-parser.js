const readline = require("readline");
const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const { hex, rgb, hsl, htmlColorName } = require("./regular-expressions");
const { shouldExcludePath, shouldIncludeExtension } = require("./regular-expressions");


class PaletteParser {
    constructor(entryPath) {
        this.colorMap = {};
        this.entryPath = entryPath
    }

    _addColor(colorList, lineNumber, filePath) {
        colorList.forEach(color => {
            if (Object.keys(this.colorMap).includes(color)) {
                this.colorMap[color].locations.push({
                    lineNumber: lineNumber,
                    filePath: filePath,
                    uniqueId: shortid.generate()
                });
            } else {
                this.colorMap[color] = {
                    uniqueId: shortid.generate(),
                    locations: [{
                        lineNumber: lineNumber,
                        filePath: filePath,
                        uniqueId: shortid.generate()
                    }]
                };
            }
        });
    }

    _parseDirectory(dir) {
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (err, files) => {
                if (err) {
                    return reject(err);
                }

                else if (files.length) {
                    let parsedFiles = files
                        .filter(file => {
                            return !shouldExcludePath(file);
                        })
                        .map(file => {
                            return this._determinePathAction(path.resolve(dir, file));
                        });

                    return Promise.all(parsedFiles).then(resolve);
                }

                else {
                    return resolve();
                }
            });
        });
    }

    _parseFile(file) {
        return new Promise((resolve) => {
            if (shouldIncludeExtension(file)) {
                const rl = readline.createInterface({
                    input: fs.createReadStream(file)
                });

                let lineCount = 1;

                rl.on('line', (line) => {
                    let hexValueList = hex(line);
                    let rgbValueList = rgb(line);
                    let hslValueList = hsl(line);
                    let htmlColorValueList = htmlColorName(line);

                    if (hexValueList) {
                        this._addColor(hexValueList, lineCount, file);
                    }

                    if (rgbValueList) {
                        this._addColor(rgbValueList, lineCount, file);
                    }

                    if (hslValueList) {
                        this._addColor(hslValueList, lineCount, file);
                    }

                    if (htmlColorValueList) {
                        this._addColor(htmlColorValueList, lineCount, file);
                    }

                    lineCount++;
                }).on('close', () => {
                    return resolve();
                });
            } else {
                return resolve();
            }
        });
    }

    _determinePathAction(fsPath) {
        return new Promise((resolve, reject) => {
            fs.lstat(fsPath, (err, stats) => {
                if (err) {
                    return reject(err);
                }

                else if (stats.isFile()) {
                    return resolve(this._parseFile(fsPath));
                }

                else if (stats.isDirectory()) {
                    return resolve(this._parseDirectory(fsPath));
                }

                else {
                    return resolve();
                }
            });
        });
    }

    generateColorMap() {
        return this._parseDirectory(this.entryPath).then(() => {
            return this.colorMap;
        }).catch(err => {
            throw err;
        });
    }
}

module.exports = PaletteParser;
