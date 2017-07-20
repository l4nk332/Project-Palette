// HEX
const hex = str => str.match(/#[0-9a-f]{8}|#[0-9a-f]{6}|#[0-9a-f]{4}|#[0-9a-f]{3}/ig);

// RGB
const rgb = str => str.match(/(rgb\(\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2}))\)|(rgba\(\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2}))(?:\s*,\s*\d(?:\.\d*)?)\s*\)/ig);

// HSL
const hsl = str => str.match(/hsla?\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%(?:\s*,\s*\d(?:\.\d*)?)?\s*\)/ig);

// Directories to exclude
const EXCLUDE_DIR = /\.git|node_modules/gi;

// Files to include
const INCLUDE_FILE = /.*\.(js[x]?|css|sass|scss|less|html|styl|pug|jade|slim|ejs|vue|elm)/gi;

module.exports = {
    hex,
    rgb,
    hsl,
    EXCLUDE_DIR,
    INCLUDE_FILE
};
