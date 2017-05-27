// HEX
const hex = str => str.match(/#[0-9a-f]{8}|#[0-9a-f]{6}|#[0-9a-f]{4}|#[0-9a-f]{3}/ig);

// RGB
const rgb = str => str.match(/rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}(?:\s*,\s*\d(?:\.\d*)?)?\s*\)/ig);

// HSL
const hsl = str => str.match(/hsla?\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%(?:\s*,\s*\d(?:\.\d*)?)?\s*\)/ig);
