// HEX
const hex = str =>
  str.match(/#[0-9a-f]{8}|#[0-9a-f]{6}|#[0-9a-f]{4}|#[0-9a-f]{3}/gi);

// RGB
const rgb = str =>
  str.match(
    /(rgb\(\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2}))\s*\)|(rgba\(\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2})\s*,\s*([0-2]?[0-5]{1,2}|[0-1]?[0-9]{1,2}))(?:\s*,\s*(?:1|0(?:\.\d*)?))\s*\)/gi
  );

// HSL
const hsl = str =>
  str.match(
    /hsl\(\s*([1-3][0-6][0-9]|[1-2][0-9][0-9]|[0-9]?[0-9])\s*,\s*((?:100)|[0-9]?[0-9])%\s*,\s*((?:100)|[0-9]?[0-9])%\s*\)|hsla\(\s*([1-3][0-6][0-9]|[1-2][0-9][0-9]|[0-9]?[0-9])\s*,\s*((?:100)|[0-9]?[0-9])%\s*,\s*((?:100)|[0-9]?[0-9])%\s*(?:\s*,\s*(?:1\.?0?|0\.?\d*))\s*\)/gi
  );

const HTML_COLOR_NAMES = [
  "aliceblue",
  "antiquewhite",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blueviolet",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgrey",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgrey",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olivedrab",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "rebeccapurple",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "whitesmoke",
  "yellowgreen",
  "aqua",
  "yellow",
  "white",
  "blue",
  "brown",
  "coral",
  "cyan",
  "gold",
  "gray",
  "grey",
  "green",
  "lavender",
  "goldenrod",
  "lime",
  "olive",
  "orange",
  "purple",
  "red"
];

// Html Color Names
const htmlColorName = str => {
  let normalizedStringArray = str
    .replace(/[^a-z]/gi, " ")
    .toLowerCase()
    .split(/\s/gi);

  let filteredColorNames = normalizedStringArray.filter(normalizedString => {
    return HTML_COLOR_NAMES.includes(normalizedString);
  });

  return filteredColorNames.length > 0 ? filteredColorNames : null;
};

// Directories to exclude
const shouldExcludePath = str =>
  /(?:^|\/)(?:\.git|node_modules)(?:\/|$)/gi.test(str);

// Files to include
const shouldIncludeExtension = str =>
  /(?:\/|\\|\.)(js[x]?|css|sass|scss|less|htm[l]?|styl|pug|jade|slim|ejs|vue|elm)$/gi.test(
    str
  );

module.exports = {
  hex,
  rgb,
  hsl,
  htmlColorName,
  shouldExcludePath,
  shouldIncludeExtension
};
