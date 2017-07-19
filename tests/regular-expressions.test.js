const { hex, rgb, hsl } = require("../helpers/regular-expressions");
const { EXCLUDE_DIR, INCLUDE_FILE } = require("../helpers/regular-expressions");



/* Test Hex Regular Expression */
/* =========================== */

test("Should match valid Hex colors", () => {
    expect(hex("#fff")).toEqual(["#fff"]);
    expect(hex("#123")).toEqual(["#123"]);
    expect(hex("#ACD")).toEqual(["#ACD"]);
    expect(hex("#e4D")).toEqual(["#e4D"]);
    expect(hex("#abcd")).toEqual(["#abcd"]);
    expect(hex("#0000")).toEqual(["#0000"]);
    expect(hex("#ABDD")).toEqual(["#ABDD"]);
    expect(hex("#3DdD")).toEqual(["#3DdD"]);
    expect(hex("#eeeeee")).toEqual(["#eeeeee"]);
    expect(hex("#123400")).toEqual(["#123400"]);
    expect(hex("#FDDFDA")).toEqual(["#FDDFDA"]);
    expect(hex("#F4ab45")).toEqual(["#F4ab45"]);
    expect(hex("#aaabbbcc")).toEqual(["#aaabbbcc"]);
    expect(hex("#00011199")).toEqual(["#00011199"]);
    expect(hex("#ABDCCAAA")).toEqual(["#ABDCCAAA"]);
    expect(hex("#BaD3320a")).toEqual(["#BaD3320a"]);
    expect(hex("#aaa #4444 #abCCd3 #AAA00011")).toEqual([
        "#aaa",
        "#4444",
        "#abCCd3",
        "#AAA00011"
    ]);
});

test("Should not match invalid Hex colors", () => {
    expect(hex("#vroi")).toBeNull();
    expect(hex("#lkjaldk09")).toBeNull();
    expect(hex("#90t")).toBeNull();
    expect(hex("aeee0")).toBeNull();
    expect(hex("999")).toBeNull();
});

test("Should match valid truncated Hex values", () => {
    expect(hex("#33333")).toEqual(["#3333"]);
    expect(hex("#bbabbg")).toEqual(["#bbab"]);
    expect(hex("#B34racdd")).toEqual(["#B34"]);
    expect(hex("#A9B3C2do")).toEqual(["#A9B3C2"]);
    expect(hex("#482cBadee00")).toEqual(["#482cBade"]);
    expect(hex("{ color: #3445; }")).toEqual(["#3445"]);
});

test("Should match multiple hex values", () => {
    expect(hex("style='color: #fff; background: #e9fcca;'")).toEqual([
        "#fff",
        "#e9fcca"
    ]);
    expect(hex("#fff|#e555/#110aab!#Bbac4591#fa0")).toEqual([
        "#fff",
        "#e555",
        "#110aab",
        "#Bbac4591",
        "#fa0"
    ]);
});
