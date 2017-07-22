// HEX
const hex = str => str.match(/#[0-9a-f]{8}|#[0-9a-f]{6}|#[0-9a-f]{4}|#[0-9a-f]{3}/ig);

// RGB
const rgb = str => str.match(/(rgb\(\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2}))\s*\)|(rgba\(\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2}))(?:\s*,\s*(?:1|0(?:\.\d*)?))\s*\)/ig);

// HSL
const hsl = str => str.match(/hsl\(\s*([1-3][0-6][0-9]|[1-2][0-9][0-9]|[0-9]?[0-9])\s*,\s*((?:100)|[0-9]?[0-9])%\s*,\s*((?:100)|[0-9]?[0-9])%\s*\)|hsla\(\s*([1-3][0-6][0-9]|[1-2][0-9][0-9]|[0-9]?[0-9])\s*,\s*((?:100)|[0-9]?[0-9])%\s*,\s*((?:100)|[0-9]?[0-9])%\s*(?:\s*,\s*(?:1\.?0?|0\.?\d*))\s*\)/ig);

// Html Color Names
const htmlColorName = str => str.match(/(^|[^0-9a-f])(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgrey|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|grey|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgrey|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)([^0-9a-f]|$)/gi);

// Directories to exclude
const shouldExcludePath = str => /(?:^|\/)(?:\.git|node_modules)(?:\/|$)/gi.test(str);

// Files to include
const shouldIncludeExtension = str => /(?:\/|\\|\.)(js[x]?|css|sass|scss|less|htm[l]?|styl|pug|jade|slim|ejs|vue|elm)$/gi.test(str);

module.exports = {
    hex,
    rgb,
    hsl,
    htmlColorName,
    shouldExcludePath,
    shouldIncludeExtension
};
