const path = require("path");
const { generateColorMap } = require("../helpers/palette-parser");

/* Test Generation of Color Map */
/* ============================ */

test("Should generate color map for valid paths", () => {
    expect.assertions(9);
    const dirPath = path.join(__dirname, "basic_path");
    return generateColorMap(dirPath).then((colorMap) => {
        expect(colorMap['red'].locations).toHaveLength(3);
        expect(colorMap['#000'].locations).toHaveLength(1);
        expect(colorMap['#ffffff'].locations).toHaveLength(1);
        expect(colorMap['#ffffff00'].locations).toHaveLength(2);
        expect(colorMap['#0912'].locations).toHaveLength(1);
        expect(colorMap['rgb(123, 123, 231)'].locations).toHaveLength(2);
        expect(colorMap['rgba(89, 12, 31, 0.1)'].locations).toHaveLength(2);
        expect(colorMap['hsl(300, 12%, 31%)'].locations).toHaveLength(1);
        expect(colorMap['hsla(300, 12%, 31%, 0.3)'].locations).toHaveLength(1);
    })
});
