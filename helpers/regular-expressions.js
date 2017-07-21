// HEX
const hex = str => str.match(/#[0-9a-f]{8}|#[0-9a-f]{6}|#[0-9a-f]{4}|#[0-9a-f]{3}/ig);

// RGB
const rgb = str => str.match(/(rgb\(\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2}))\s*\)|(rgba\(\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2}))(?:\s*,\s*(?:1|0(?:\.\d*)?))\s*\)/ig);

// HSL
const hsl = str => str.match(/hsl\(\s*([1-3][0-6][0-9]|[1-2][0-9][0-9]|[0-9]?[0-9])\s*,\s*((?:100)|[0-9]?[0-9])%\s*,\s*((?:100)|[0-9]?[0-9])%\s*\)|hsla\(\s*([1-3][0-6][0-9]|[1-2][0-9][0-9]|[0-9]?[0-9])\s*,\s*((?:100)|[0-9]?[0-9])%\s*,\s*((?:100)|[0-9]?[0-9])%\s*(?:\s*,\s*(?:1\.?0?|0\.?\d*))\s*\)/ig);

// Directories to exclude
const shouldExcludePath = str => /(?:^|\/)(?:\.git|node_modules)(?:\/|$)/gi.test(str);

// Files to include
const shouldIncludeExtension = str => /(?:\/|\\|\.)(js[x]?|css|sass|scss|less|htm[l]?|styl|pug|jade|slim|ejs|vue|elm)$/gi.test(str);

module.exports = {
    hex,
    rgb,
    hsl,
    shouldExcludePath,
    shouldIncludeExtension
};
