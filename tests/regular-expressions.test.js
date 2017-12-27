/* global describe:false, test:false, expect:false */

const {
  hex,
  rgb,
  hsl,
  htmlColorName,
} = require('../helpers/regular-expressions');
const {
  shouldExcludePath,
  shouldIncludeExtension,
} = require('../helpers/regular-expressions');

/* Test Hex Regular Expression */
/* =========================== */

describe('Test Hexadecimal Regular Expression Parsing', () => {
  test('Should match valid Hex colors', () => {
    expect(hex('#fff')).toEqual(['#fff']);
    expect(hex('#123')).toEqual(['#123']);
    expect(hex('#ACD')).toEqual(['#ACD']);
    expect(hex('#e4D')).toEqual(['#e4D']);
    expect(hex('#abcd')).toEqual(['#abcd']);
    expect(hex('#0000')).toEqual(['#0000']);
    expect(hex('#ABDD')).toEqual(['#ABDD']);
    expect(hex('#3DdD')).toEqual(['#3DdD']);
    expect(hex('#eeeeee')).toEqual(['#eeeeee']);
    expect(hex('#123400')).toEqual(['#123400']);
    expect(hex('#FDDFDA')).toEqual(['#FDDFDA']);
    expect(hex('#F4ab45')).toEqual(['#F4ab45']);
    expect(hex('#aaabbbcc')).toEqual(['#aaabbbcc']);
    expect(hex('#00011199')).toEqual(['#00011199']);
    expect(hex('#ABDCCAAA')).toEqual(['#ABDCCAAA']);
    expect(hex('#BaD3320a')).toEqual(['#BaD3320a']);
    expect(hex('#aaa #4444 #abCCd3 #AAA00011')).toEqual([
      '#aaa',
      '#4444',
      '#abCCd3',
      '#AAA00011',
    ]);
  });

  test('Should not match invalid Hex colors', () => {
    expect(hex('#vroi')).toBeNull();
    expect(hex('#lkjaldk09')).toBeNull();
    expect(hex('#90t')).toBeNull();
    expect(hex('aeee0')).toBeNull();
    expect(hex('999')).toBeNull();
  });

  test('Should match valid truncated Hex values', () => {
    expect(hex('#33333')).toEqual(['#3333']);
    expect(hex('#bbabbg')).toEqual(['#bbab']);
    expect(hex('#B34racdd')).toEqual(['#B34']);
    expect(hex('#A9B3C2do')).toEqual(['#A9B3C2']);
    expect(hex('#482cBadee00')).toEqual(['#482cBade']);
    expect(hex('{ color: #3445 }')).toEqual(['#3445']);
  });

  test('Should match multiple hex values', () => {
    expect(hex('style="color: #fff background: #e9fcca"')).toEqual([
      '#fff',
      '#e9fcca',
    ]);
    expect(hex('#fff|#e555/#110aab!#Bbac4591#fa0')).toEqual([
      '#fff',
      '#e555',
      '#110aab',
      '#Bbac4591',
      '#fa0',
    ]);
  });
});

/* Test RGB/RGBA Regular Expression */
/* ================================ */

describe('Test RGB(A) Regular Expression Parsing', () => {
  test('Should match valid rgb(a) colors', () => {
    expect(rgb('rgb(255, 255, 255)')).toEqual(['rgb(255, 255, 255)']);
    expect(rgb('rgb(0, 5, 78)')).toEqual(['rgb(0, 5, 78)']);
    expect(rgb('rgb(0, 0, 0)')).toEqual(['rgb(0, 0, 0)']);
    expect(rgb('rgb(123, 96, 01 )')).toEqual(['rgb(123, 96, 01 )']);
    expect(rgb('rgb(150, 150, 150)')).toEqual(['rgb(150, 150, 150)']);
    expect(rgb('rgba(0, 0, 0, 0)')).toEqual(['rgba(0, 0, 0, 0)']);
    expect(rgb('rgba(123, 19, 10, 0.5)')).toEqual(['rgba(123, 19, 10, 0.5)']);
    expect(rgb('rgba(255, 255, 255, 0.1)')).toEqual([
      'rgba(255, 255, 255, 0.1)',
    ]);
    expect(rgb('rgba(1, 2, 3, 0.)')).toEqual(['rgba(1, 2, 3, 0.)']);
    expect(rgb('rgba(1,2,3,1)')).toEqual(['rgba(1,2,3,1)']);
    expect(rgb('rgba(03, 002, 3, 0.001)')).toEqual(['rgba(03, 002, 3, 0.001)']);
    expect(rgb('rgba(3   ,2 ,3 ,0.3  )')).toEqual(['rgba(3   ,2 ,3 ,0.3  )']);
    expect(rgb('rgba(  3  ,  2  ,  3  ,  0.3  )')).toEqual([
      'rgba(  3  ,  2  ,  3  ,  0.3  )',
    ]);
    expect(rgb('RGB(255, 45, 10)')).toEqual(['RGB(255, 45, 10)']);
    expect(rgb('RgB(255, 45, 10)')).toEqual(['RgB(255, 45, 10)']);
  });

  test('Should not match invalid rgb(a) colors', () => {
    expect(rgb('(233, 23, 10)')).toBeNull();
    expect(rgb('233,23,10')).toBeNull();
    expect(rgb('rbg(15, 123, 10)')).toBeNull();
    expect(rgb('rgb (170, 123, 100)')).toBeNull();
    expect(rgb('r gb(170, 123, 100)')).toBeNull();
    expect(rgb('rgb 170, 123, 100')).toBeNull();
    expect(rgb('rgb("170", "123", "100")')).toBeNull();
    expect(rgb('rgba(170, 123, 100)')).toBeNull();
    expect(rgb('rgb(170, 123, 100, 0)')).toBeNull();
    expect(rgb('rgba(170, 123, 100, 3)')).toBeNull();
  });
});

/* Test HSL/HSLA Regular Expression */
/* ================================ */

describe('Test HSL(A) Regular Expression Parsing', () => {
  test('Should match valid hsl(a) colors', () => {
    expect(hsl('hsl(12, 25%, 23%)')).toEqual(['hsl(12, 25%, 23%)']);
    expect(hsl('hsl(0, 100%, 0%)')).toEqual(['hsl(0, 100%, 0%)']);
    expect(hsl('HSL(12, 25%, 23%)')).toEqual(['HSL(12, 25%, 23%)']);
    expect(hsl('hsl(360, 0%, 100%)')).toEqual(['hsl(360, 0%, 100%)']);
    expect(hsl('hsl( 30  ,0%  , 10%  )')).toEqual(['hsl( 30  ,0%  , 10%  )']);
    expect(hsl('hsla( 30  ,0%  , 10% ,0 )')).toEqual([
      'hsla( 30  ,0%  , 10% ,0 )',
    ]);
    expect(hsl('HSLA(125, 100%, 10%, 0.4)')).toEqual([
      'HSLA(125, 100%, 10%, 0.4)',
    ]);
    expect(hsl('hsl(30,0%,10%), hsla(356, 23%, 100%, 0.12)')).toEqual([
      'hsl(30,0%,10%)',
      'hsla(356, 23%, 100%, 0.12)',
    ]);
    expect(hsl('hsla(272, 40%, 90%, 1.0)')).toEqual([
      'hsla(272, 40%, 90%, 1.0)',
    ]);
  });

  test('Should not match invalid hsl(a) colors', () => {
    expect(hsl('hsl(400, 23%, 10%)')).toBeNull();
    expect(hsl('hsla(200, 23%, 10%, 1.1)')).toBeNull();
    expect(hsl('hsl(200, 101%, 10%, 0.1)')).toBeNull();
    expect(hsl('hsla(200, 10%, 101%, 0.1)')).toBeNull();
    expect(hsl('hsl (200, 10%, 101%, 0.1)')).toBeNull();
    expect(hsl('hsla (200, 10%, 101%, 0.1)')).toBeNull();
    expect(hsl('hsl(200 10% 10%)')).toBeNull();
    expect(hsl('hsla(272, 40%, 90%, 1.01)')).toBeNull();
    expect(hsl('hsla(0, 0%, 0%)')).toBeNull();
    expect(hsl('hsl(0, 0%, 0%, 0)')).toBeNull();
  });
});

/* Test Html Colors Regular Expression */
/* =================================== */

describe('Test HTML Color Name Parsing', () => {
  test('Should match valid Html color names', () => {
    expect(htmlColorName('darkred')).toEqual(['darkred']);
    expect(htmlColorName('aliceblue, darkred')).toEqual([
      'aliceblue',
      'darkred',
    ]);
    expect(htmlColorName('orangered')).toEqual(['orangered']);
    expect(htmlColorName('red orangered, darkred')).toEqual([
      'red',
      'orangered',
      'darkred',
    ]);
    expect(htmlColorName('red red red')).toEqual(['red', 'red', 'red']);
    expect(htmlColorName('blue, slateblue, darkblue')).toEqual([
      'blue',
      'slateblue',
      'darkblue',
    ]);
    expect(htmlColorName('black cyan darkgoldenrod')).toEqual([
      'black',
      'cyan',
      'darkgoldenrod',
    ]);
    expect(htmlColorName('honeydew aliceblue aquamarine')).toEqual([
      'honeydew',
      'aliceblue',
      'aquamarine',
    ]);
    expect(
      htmlColorName(`ghostwhite|greenyellow|honeydew|hotpink|indianred
            |indigo|ivory|khaki|lavenderblush`),
    ).toEqual([
      'ghostwhite',
      'greenyellow',
      'honeydew',
      'hotpink',
      'indianred',
      'indigo',
      'ivory',
      'khaki',
      'lavenderblush',
    ]);
  });

  test('Should not match invalid Html color names', () => {
    expect(htmlColorName('hamberburger')).toBeNull();
    expect(htmlColorName('griese')).toBeNull();
    expect(htmlColorName('cheese')).toBeNull();
    expect(htmlColorName('redisValue')).toBeNull();
    expect(htmlColorName('lightslategraymediumorchiddeepskyblue')).toBeNull();
    expect(htmlColorName('bluebyou')).toBeNull();
    expect(htmlColorName('steelblues')).toBeNull();
    expect(htmlColorName('$blue')).toBeNull();
  });
});

/* Test shouldExcludePath Regular Expression */
/* =================================== */

describe('Test Path Exclusion Regular Expression', () => {
  test('Should match valid directories paths in the shouldExcludePath regex', () => {
    expect(shouldExcludePath('node_modules')).toBeTruthy();
    expect(shouldExcludePath('/l4nk332/Code/js/node_modules/')).toBeTruthy();
    expect(shouldExcludePath('.git')).toBeTruthy();
    expect(shouldExcludePath('/name/.git')).toBeTruthy();
    expect(shouldExcludePath('.git/node_modules/')).toBeTruthy();
    expect(shouldExcludePath('.Git/node_modules/')).toBeTruthy();
    expect(shouldExcludePath('.path/to/success/Node_Modules/')).toBeTruthy();
  });

  test('Should not match invalid directories paths in the shouldExcludePath regex', () => {
    expect(shouldExcludePath('/my_node_modules_look_alike/')).toBeFalsy();
    expect(shouldExcludePath('/path/to/.gitignore')).toBeFalsy();
    expect(shouldExcludePath('/.gitignore/node_modules /')).toBeFalsy();
    expect(shouldExcludePath(' .git ')).toBeFalsy();
    expect(shouldExcludePath(' node_modules ')).toBeFalsy();
  });
});

/* Test shouldIncludeExtension Regular Expression */
/* ========================================= */

describe('Test Extension Inclusion Regular Expression', () => {
  test('Should match valid directories in the shouldIncludeExtension regex', () => {
    expect(shouldIncludeExtension('main.js')).toBeTruthy();
    expect(shouldIncludeExtension('/src/react/main.js')).toBeTruthy();
    expect(shouldIncludeExtension('/src/components/App.jsx')).toBeTruthy();
    expect(shouldIncludeExtension('style/find.css')).toBeTruthy();
    expect(shouldIncludeExtension('scss/style.scss')).toBeTruthy();
    expect(
      shouldIncludeExtension('/styles/partials/_buttons.sass'),
    ).toBeTruthy();
    expect(shouldIncludeExtension('/palette/colors.less')).toBeTruthy();
    expect(shouldIncludeExtension('/main/index.html')).toBeTruthy();
    expect(shouldIncludeExtension('stlus.styl')).toBeTruthy();
    expect(shouldIncludeExtension('login.pug')).toBeTruthy();
    expect(shouldIncludeExtension('login.jade')).toBeTruthy();
    expect(shouldIncludeExtension('config.slim')).toBeTruthy();
    expect(shouldIncludeExtension('cutter.ejs')).toBeTruthy();
    expect(shouldIncludeExtension('index.vue')).toBeTruthy();
    expect(shouldIncludeExtension('/src/dist/View.elm')).toBeTruthy();
    expect(shouldIncludeExtension('style.min.css')).toBeTruthy();
    expect(shouldIncludeExtension('Force/yt/style.min.css')).toBeTruthy();
    expect(shouldIncludeExtension('ALLCAPS/MAIN.HTML')).toBeTruthy();
    expect(shouldIncludeExtension('extra/ext.js.html')).toBeTruthy();
    expect(shouldIncludeExtension('trump/trump.name.html')).toBeTruthy();
    expect(shouldIncludeExtension(' space  .js')).toBeTruthy();
    expect(shouldIncludeExtension('120398```~\\-=++ç.js')).toBeTruthy();
    expect(shouldIncludeExtension('html5.htm')).toBeTruthy();
  });

  test('Should match valid directories in the shouldIncludeExtension regex', () => {
    expect(shouldIncludeExtension('file.jsname.ytr')).toBeFalsy();
    expect(shouldIncludeExtension('logic.js/wrong/thing')).toBeFalsy();
    expect(shouldIncludeExtension('wrong.html.js.ip')).toBeFalsy();
    expect(shouldIncludeExtension('file.bash')).toBeFalsy();
    expect(shouldIncludeExtension('file.sh')).toBeFalsy();
  });
});
