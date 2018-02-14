const readline = require('readline');
const fs = require('fs');
const path = require('path');
const shortid = require('shortid');

const {stripFileSystemPath} = require('./path-utils');
const {
  hex,
  rgb,
  hsl,
  htmlColorName,
  shouldExcludePath,
  shouldIncludeExtension,
  stripInlineComment,
} = require('./regular-expressions');

class PaletteParser {
  constructor(entryPath) {
    this.colorMap = {};
    this.entryPath = entryPath;
  }

  addColor(colorList, lineNumber, filePath) {
    colorList.forEach(color => {
      if (Object.keys(this.colorMap).includes(color)) {
        this.colorMap[color].locations.push({
          lineNumber,
          filePath,
          uniqueId: shortid.generate(),
        });
      } else {
        this.colorMap[color] = {
          uniqueId: shortid.generate(),
          locations: [
            {
              lineNumber,
              filePath,
              uniqueId: shortid.generate(),
            },
          ],
        };
      }
    });
  }

  parseDirectory(dir) {
    return new Promise((resolve, reject) => {
      fs.readdir(dir, (err, files) => {
        if (err) {
          return reject(err);
        } else if (files.length) {
          const parsedFiles = files
            .filter(file => !shouldExcludePath(file))
            .map(file => this.determinePathAction(path.resolve(dir, file)));

          return Promise.all(parsedFiles).then(resolve);
        }
        return resolve();
      });
    });
  }

  parseFile(file) {
    return new Promise(resolve => {
      if (shouldIncludeExtension(file)) {
        const rl = readline.createInterface({
          input: fs.createReadStream(file),
        });

        let lineCount = 1;

        return rl.on('line', rawLine => {
          const line = stripInlineComment(rawLine);
          const hexValueList = hex(line);
          const rgbValueList = rgb(line);
          const hslValueList = hsl(line);
          const htmlColorValueList = htmlColorName(line);
          const strippedPath = stripFileSystemPath(file);

          if (hexValueList) {
            this.addColor(hexValueList, lineCount, strippedPath);
          }

          if (rgbValueList) {
            this.addColor(rgbValueList, lineCount, strippedPath);
          }

          if (hslValueList) {
            this.addColor(hslValueList, lineCount, strippedPath);
          }

          if (htmlColorValueList) {
            this.addColor(htmlColorValueList, lineCount, strippedPath);
          }

          lineCount += 1;
        }).on('close', () => resolve());
      }
      return resolve();
    });
  }

  determinePathAction(fsPath) {
    return new Promise((resolve, reject) => {
      fs.lstat(fsPath, (err, stats) => {
        if (err) {
          return reject(err);
        } else if (stats.isFile()) {
          return resolve(this.parseFile(fsPath));
        } else if (stats.isDirectory()) {
          return resolve(this.parseDirectory(fsPath));
        }
        return resolve();
      });
    });
  }

  generateColorMap() {
    return this.parseDirectory(this.entryPath)
      .then(() => this.colorMap)
      .catch(err => {
        throw err;
      });
  }
}

module.exports = PaletteParser;
