import axios from 'axios';
import path from 'path';

import {GITHUB_API, COLORS_URL} from 'utils/constants';

export const searchGitHubProject = projectURI => {
  const url = path.join(GITHUB_API, 'repos', projectURI);
  return axios.get(url);
};

export const getProjectPalette = params =>
  axios.post(COLORS_URL, {params});

export const mockPaletteResponse = () => ({
  aliceblue: {
    uniqueId: 'B1E036JY-',
    locations: [
      {
        lineNumber: 18,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJxEAhT1FW',
      },
      {
        lineNumber: 160,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1WAlVRn6kYZ',
      },
      {
        lineNumber: 161,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Sym0eER3a1YW',
      },
      {
        lineNumber: 181,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HygxWER3a1KW',
      },
      {
        lineNumber: 183,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HJXlZEChTyYW',
      },
    ],
  },
  antiquewhite: {
    uniqueId: 'SkWNA2p1FW',
    locations: [
      {
        lineNumber: 19,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJfNAna1FZ',
      },
    ],
  },
  aquamarine: {
    uniqueId: 'H1mNRnT1YZ',
    locations: [
      {
        lineNumber: 20,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyNNAhTyF-',
      },
      {
        lineNumber: 181,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkZe-V02pyFW',
      },
      {
        lineNumber: 184,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r1EgW4AnaJFW',
      },
    ],
  },
  azure: {
    uniqueId: 'SJH4Rha1Y-',
    locations: [
      {
        lineNumber: 21,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'r1UERhT1KW',
      },
    ],
  },
  beige: {
    uniqueId: 'B1PVAh6kYW',
    locations: [
      {
        lineNumber: 22,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rkuN0nTJF-',
      },
    ],
  },
  bisque: {
    uniqueId: 'B1Y4C3pytZ',
    locations: [
      {
        lineNumber: 23,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rJqNAhpyFZ',
      },
    ],
  },
  black: {
    uniqueId: 'SJsECnpktZ',
    locations: [
      {
        lineNumber: 24,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'H1hEC36yYb',
      },
      {
        lineNumber: 176,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r1KkZVAh6yKW',
      },
      {
        lineNumber: 177,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rJhyWE03TyFZ',
      },
    ],
  },
  blanchedalmond: {
    uniqueId: 'H1a40hT1Y-',
    locations: [
      {
        lineNumber: 25,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S10V03pJKZ',
      },
    ],
  },
  blueviolet: {
    uniqueId: 'S1JxV02pJtb',
    locations: [
      {
        lineNumber: 26,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyxgNCnayYb',
      },
    ],
  },
  burlywood: {
    uniqueId: 'H1ZxNR2pyYZ',
    locations: [
      {
        lineNumber: 27,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B1flEA2pytb',
      },
    ],
  },
  cadetblue: {
    uniqueId: 'rymgEChT1YW',
    locations: [
      {
        lineNumber: 28,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rkVlVR3TJF-',
      },
    ],
  },
  chartreuse: {
    uniqueId: 'BJHxERhTkYZ',
    locations: [
      {
        lineNumber: 29,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rk8l403pyYW',
      },
    ],
  },
  chocolate: {
    uniqueId: 'rkwgEC3ayt-',
    locations: [
      {
        lineNumber: 30,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJugEC2pJtb',
      },
    ],
  },
  cornflowerblue: {
    uniqueId: 'H1Kg4ChTJK-',
    locations: [
      {
        lineNumber: 31,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B15e4C2TktW',
      },
    ],
  },
  cornsilk: {
    uniqueId: 'S1jl4CnaytZ',
    locations: [
      {
        lineNumber: 32,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SknxV02pJKZ',
      },
    ],
  },
  crimson: {
    uniqueId: 'HkplVAna1Fb',
    locations: [
      {
        lineNumber: 33,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B1Ax4Aha1FW',
      },
    ],
  },
  darkblue: {
    uniqueId: 'HJy-VR2aJKZ',
    locations: [
      {
        lineNumber: 34,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BylZ4Cha1FW',
      },
      {
        lineNumber: 171,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ByBJWVCh6JKb',
      },
      {
        lineNumber: 174,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJOyWVA2ayKb',
      },
    ],
  },
  darkcyan: {
    uniqueId: 'BJ--ERha1Fb',
    locations: [
      {
        lineNumber: 35,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ryz-EC3TkK-',
      },
    ],
  },
  darkgoldenrod: {
    uniqueId: 'BJXZE0hpJKb',
    locations: [
      {
        lineNumber: 36,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SkVZEAhaJtW',
      },
      {
        lineNumber: 176,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkiJWV0hTytb',
      },
      {
        lineNumber: 179,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ry0y-NC2akY-',
      },
    ],
  },
  darkgray: {
    uniqueId: 'SJBZ4C26JtW',
    locations: [
      {
        lineNumber: 37,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BJL-NAh6ytW',
      },
    ],
  },
  darkgrey: {
    uniqueId: 'rJPW4R3pkKW',
    locations: [
      {
        lineNumber: 38,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S1ubN03TJt-',
      },
    ],
  },
  darkgreen: {
    uniqueId: 'BJFZV0hTyFW',
    locations: [
      {
        lineNumber: 39,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S1c-N0n6yF-',
      },
    ],
  },
  darkkhaki: {
    uniqueId: 'r1j-EA2aJF-',
    locations: [
      {
        lineNumber: 40,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Byn-40n61tb',
      },
    ],
  },
  darkmagenta: {
    uniqueId: 'S1p-4R2pyYZ',
    locations: [
      {
        lineNumber: 41,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Hk0bECnpkY-',
      },
    ],
  },
  darkolivegreen: {
    uniqueId: 'HJkfER2a1FW',
    locations: [
      {
        lineNumber: 42,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BJeMEA26JFZ',
      },
    ],
  },
  darkorange: {
    uniqueId: 'BkbfNRnT1Yb',
    locations: [
      {
        lineNumber: 43,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyMM4AnT1tW',
      },
    ],
  },
  darkorchid: {
    uniqueId: 'rkQM4RnpJFZ',
    locations: [
      {
        lineNumber: 44,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ByEz4A2pJFW',
      },
    ],
  },
  darkred: {
    uniqueId: 'HJSME0hTkFW',
    locations: [
      {
        lineNumber: 45,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B1IG40361FW',
      },
      {
        lineNumber: 159,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJ1CeN0npJtZ',
      },
      {
        lineNumber: 159,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'S1l0lNAn6ktZ',
      },
      {
        lineNumber: 160,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BkfReEC36Jt-',
      },
      {
        lineNumber: 162,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rk40eVCn61t-',
      },
      {
        lineNumber: 165,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'S1FCe4Rn6JtZ',
      },
      {
        lineNumber: 168,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkhClVRna1KW',
      },
    ],
  },
  darksalmon: {
    uniqueId: 'H1DzVR2aJYW',
    locations: [
      {
        lineNumber: 46,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rJ_zE0hpytb',
      },
    ],
  },
  darkseagreen: {
    uniqueId: 'ByFMER36JKb',
    locations: [
      {
        lineNumber: 47,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SycG40npJYW',
      },
    ],
  },
  darkslateblue: {
    uniqueId: 'H1oGVR361KW',
    locations: [
      {
        lineNumber: 48,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyhGE0hpJFZ',
      },
    ],
  },
  darkslategray: {
    uniqueId: 'rk6zNA261tW',
    locations: [
      {
        lineNumber: 49,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJ0zEC3aytW',
      },
    ],
  },
  darkslategrey: {
    uniqueId: 'B1J7ERhT1YW',
    locations: [
      {
        lineNumber: 50,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SkgQNAn6JtW',
      },
    ],
  },
  darkturquoise: {
    uniqueId: 'SkZmVA3pJYZ',
    locations: [
      {
        lineNumber: 51,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rkGQE03aJK-',
      },
    ],
  },
  darkviolet: {
    uniqueId: 'HkXQ40n6JF-',
    locations: [
      {
        lineNumber: 52,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HyEQ4CnayK-',
      },
    ],
  },
  deeppink: {
    uniqueId: 'rkB7V02aJFb',
    locations: [
      {
        lineNumber: 53,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ryIQNR2pJYb',
      },
    ],
  },
  deepskyblue: {
    uniqueId: 'B1P740np1YZ',
    locations: [
      {
        lineNumber: 54,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJ_mVAh6ktb',
      },
    ],
  },
  dimgray: {
    uniqueId: 'ryFQER3TyF-',
    locations: [
      {
        lineNumber: 55,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B15mEA3TJtb',
      },
    ],
  },
  dimgrey: {
    uniqueId: 'SJs74AhaytW',
    locations: [
      {
        lineNumber: 56,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'r12QNAhTyK-',
      },
    ],
  },
  dodgerblue: {
    uniqueId: 'Byp7VR2T1Kb',
    locations: [
      {
        lineNumber: 57,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJAXN036yY-',
      },
    ],
  },
  firebrick: {
    uniqueId: 'ryyEN03p1KW',
    locations: [
      {
        lineNumber: 58,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'r1e4EAh61KW',
      },
    ],
  },
  floralwhite: {
    uniqueId: 'HkWEERn6JtW',
    locations: [
      {
        lineNumber: 59,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Syz4NRnakFW',
      },
    ],
  },
  forestgreen: {
    uniqueId: 'SkXEVAhpktb',
    locations: [
      {
        lineNumber: 60,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BkVNVCh6Jt-',
      },
    ],
  },
  fuchsia: {
    uniqueId: 'H1rNVR3aJY-',
    locations: [
      {
        lineNumber: 61,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'H1IEERnayKW',
      },
    ],
  },
  gainsboro: {
    uniqueId: 'SJPNER2T1tb',
    locations: [
      {
        lineNumber: 62,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rk_NNA3a1Fb',
      },
    ],
  },
  ghostwhite: {
    uniqueId: 'r1tENR3T1tb',
    locations: [
      {
        lineNumber: 63,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJc4V03pytW',
      },
      {
        lineNumber: 187,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1rxZN0n61t-',
      },
      {
        lineNumber: 190,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'S1ReZV0hayF-',
      },
    ],
  },
  greenyellow: {
    uniqueId: 'Hkj4ERhakYZ',
    locations: [
      {
        lineNumber: 64,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJhNNC3TkYb',
      },
      {
        lineNumber: 187,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJLebVR3aJFZ',
      },
      {
        lineNumber: 191,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1J-bEC2ayYZ',
      },
    ],
  },
  honeydew: {
    uniqueId: 'Sy6VVC3pytW',
    locations: [
      {
        lineNumber: 65,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyRENC3p1FW',
      },
      {
        lineNumber: 181,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HJJgWN03akK-',
      },
      {
        lineNumber: 182,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkfeZVC3a1KW',
      },
      {
        lineNumber: 187,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJvl-VR2a1tW',
      },
      {
        lineNumber: 192,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJlbbVAnTyYb',
      },
    ],
  },
  hotpink: {
    uniqueId: 'SkJBN02akFZ',
    locations: [
      {
        lineNumber: 66,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HkeS4026kF-',
      },
      {
        lineNumber: 187,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HyugW4AhTytZ',
      },
      {
        lineNumber: 193,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r1-ZZ4A2a1FZ',
      },
    ],
  },
  indianred: {
    uniqueId: 'r1-SER2TJtZ',
    locations: [
      {
        lineNumber: 67,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'H1zHNR2Tytb',
      },
      {
        lineNumber: 187,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkYxWNAnTyFZ',
      },
      {
        lineNumber: 194,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJzb-EAh6yKW',
      },
    ],
  },
  indigo: {
    uniqueId: 'SJXrN0h6JKW',
    locations: [
      {
        lineNumber: 68,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'r1NB40hpJYb',
      },
      {
        lineNumber: 188,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJqgbEA2pyK-',
      },
      {
        lineNumber: 195,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'S1QZZV03pyKZ',
      },
    ],
  },
  ivory: {
    uniqueId: 'SkSBVAnp1tW',
    locations: [
      {
        lineNumber: 69,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ByUS4Ah6JKb',
      },
      {
        lineNumber: 188,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r1jxWVC3ayF-',
      },
      {
        lineNumber: 196,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ByVW-EA36yFb',
      },
    ],
  },
  khaki: {
    uniqueId: 'SkvH402a1KW',
    locations: [
      {
        lineNumber: 70,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJdSV0naJFb',
      },
      {
        lineNumber: 188,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rk2e-VChayKZ',
      },
      {
        lineNumber: 197,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1BZW402pyFb',
      },
    ],
  },
  lavenderblush: {
    uniqueId: 'ryYH4Cha1tb',
    locations: [
      {
        lineNumber: 71,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B15BNAnpytb',
      },
      {
        lineNumber: 188,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rJTeWVRnakYb',
      },
      {
        lineNumber: 198,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkLZ-VR2TJYb',
      },
    ],
  },
  lawngreen: {
    uniqueId: 'B1sSEC361KW',
    locations: [
      {
        lineNumber: 72,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S12SV026JY-',
      },
    ],
  },
  lemonchiffon: {
    uniqueId: 'HkarE02T1YZ',
    locations: [
      {
        lineNumber: 73,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rJ0B40hpkKb',
      },
    ],
  },
  lightblue: {
    uniqueId: 'By1UE0n6JFb',
    locations: [
      {
        lineNumber: 74,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJxLNC36yY-',
      },
    ],
  },
  lightcoral: {
    uniqueId: 'r1ZUN0npytZ',
    locations: [
      {
        lineNumber: 75,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyGUVC3pyKZ',
      },
    ],
  },
  lightcyan: {
    uniqueId: 'S1mLV02pyKW',
    locations: [
      {
        lineNumber: 76,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ByNLN0n61tW',
      },
    ],
  },
  lightgoldenrodyellow: {
    uniqueId: 'r1BLNRnpkK-',
    locations: [
      {
        lineNumber: 77,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BkIUEChTkFW',
      },
    ],
  },
  lightgray: {
    uniqueId: 'rJPL4RnpktW',
    locations: [
      {
        lineNumber: 78,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rydL4C3TyKW',
      },
    ],
  },
  lightgrey: {
    uniqueId: 'HJFU4Rh6kY-',
    locations: [
      {
        lineNumber: 79,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Sk9IVRhayYb',
      },
    ],
  },
  lightgreen: {
    uniqueId: 'H1iUV0n6yKW',
    locations: [
      {
        lineNumber: 80,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJ3IEAna1tb',
      },
    ],
  },
  lightpink: {
    uniqueId: 'ry6LER36JKb',
    locations: [
      {
        lineNumber: 81,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B10LVAnpyK-',
      },
    ],
  },
  lightsalmon: {
    uniqueId: 'HkJvNAhaJtW',
    locations: [
      {
        lineNumber: 82,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BkewVC26kKZ',
      },
    ],
  },
  lightseagreen: {
    uniqueId: 'SkZDNR26JYW',
    locations: [
      {
        lineNumber: 83,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BkMDN0hpktW',
      },
    ],
  },
  lightskyblue: {
    uniqueId: 'Hk7PEChpktW',
    locations: [
      {
        lineNumber: 84,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyNwERnT1K-',
      },
    ],
  },
  lightslategray: {
    uniqueId: 'ryHvNAn6JYW',
    locations: [
      {
        lineNumber: 85,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BkLvEC3pkY-',
      },
    ],
  },
  lightslategrey: {
    uniqueId: 'SJwvVA2TkKb',
    locations: [
      {
        lineNumber: 86,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SkdwER2ayKb',
      },
    ],
  },
  lightsteelblue: {
    uniqueId: 'BkFwNCh61KW',
    locations: [
      {
        lineNumber: 87,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'By9wNC3TkF-',
      },
    ],
  },
  lightyellow: {
    uniqueId: 'HkoDE03TJYb',
    locations: [
      {
        lineNumber: 88,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Sy3DE0nT1Y-',
      },
    ],
  },
  limegreen: {
    uniqueId: 'ryaPEChakKW',
    locations: [
      {
        lineNumber: 89,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ry0vN03p1KW',
      },
    ],
  },
  linen: {
    uniqueId: 'r1J_NA36yYZ',
    locations: [
      {
        lineNumber: 90,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rJxOEC2aJYb',
      },
    ],
  },
  magenta: {
    uniqueId: 'B1ZOV0361Fb',
    locations: [
      {
        lineNumber: 91,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S1zdNC2ayFb',
      },
    ],
  },
  maroon: {
    uniqueId: 'ryX_E0nTkt-',
    locations: [
      {
        lineNumber: 92,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ByVdNRh6JF-',
      },
    ],
  },
  mediumaquamarine: {
    uniqueId: 'HJrdNRn6yYZ',
    locations: [
      {
        lineNumber: 93,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rk8uVC3aJYb',
      },
    ],
  },
  mediumblue: {
    uniqueId: 'rkPdEA2p1tb',
    locations: [
      {
        lineNumber: 94,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S1dOECnTytW',
      },
    ],
  },
  mediumorchid: {
    uniqueId: 'r1tdE0n6kYW',
    locations: [
      {
        lineNumber: 95,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rkc_ERh61FZ',
      },
    ],
  },
  mediumpurple: {
    uniqueId: 'rJo_4CnakKb',
    locations: [
      {
        lineNumber: 96,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BJhdEAhTkYZ',
      },
    ],
  },
  mediumseagreen: {
    uniqueId: 'Bka_VChakYW',
    locations: [
      {
        lineNumber: 97,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'By0_ERhakYZ',
      },
    ],
  },
  mediumslateblue: {
    uniqueId: 'r1kKVR261tZ',
    locations: [
      {
        lineNumber: 98,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJeKE0hTJYW',
      },
    ],
  },
  mediumspringgreen: {
    uniqueId: 'HJ-YNR2aJtW',
    locations: [
      {
        lineNumber: 99,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rJGtEC361Y-',
      },
    ],
  },
  mediumturquoise: {
    uniqueId: 'HJXKNRhTJKb',
    locations: [
      {
        lineNumber: 100,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJNYVAnTyF-',
      },
    ],
  },
  mediumvioletred: {
    uniqueId: 'BkHYV0n6JYb',
    locations: [
      {
        lineNumber: 101,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJIK40n6Jtb',
      },
    ],
  },
  midnightblue: {
    uniqueId: 'rkPF4ChpkFW',
    locations: [
      {
        lineNumber: 102,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rkdtVCnT1Yb',
      },
    ],
  },
  mintcream: {
    uniqueId: 'rJKFV0h6Jtb',
    locations: [
      {
        lineNumber: 103,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyctNA3pJYb',
      },
    ],
  },
  mistyrose: {
    uniqueId: 'S1sKVChaJFW',
    locations: [
      {
        lineNumber: 104,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Hy2YV0hakYW',
      },
    ],
  },
  moccasin: {
    uniqueId: 'rkpYNAhTktb',
    locations: [
      {
        lineNumber: 105,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'By0t4Rnp1K-',
      },
    ],
  },
  navajowhite: {
    uniqueId: 'Hy1c4A2ayFW',
    locations: [
      {
        lineNumber: 106,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Sye5EAn6JKW',
      },
    ],
  },
  navy: {
    uniqueId: 'rk-cNR3T1t-',
    locations: [
      {
        lineNumber: 107,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BkG9VC3TktZ',
      },
    ],
  },
  oldlace: {
    uniqueId: 'rkXcEC3pyt-',
    locations: [
      {
        lineNumber: 108,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HyV5ECnaJtb',
      },
    ],
  },
  olivedrab: {
    uniqueId: 'SyBqVRhp1KZ',
    locations: [
      {
        lineNumber: 109,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SkUqNCnT1Y-',
      },
    ],
  },
  orangered: {
    uniqueId: 'ByvqNAnpkYW',
    locations: [
      {
        lineNumber: 110,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S1_qVRh61t-',
      },
      {
        lineNumber: 164,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'H1HRgVChTJYZ',
      },
      {
        lineNumber: 164,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJIReNR2ayYW',
      },
      {
        lineNumber: 165,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SyuCl4Cnaytb',
      },
      {
        lineNumber: 167,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SyoAeE0na1FW',
      },
    ],
  },
  orchid: {
    uniqueId: 'HJK9E0hakK-',
    locations: [
      {
        lineNumber: 111,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJqcNAhpkFW',
      },
    ],
  },
  palegoldenrod: {
    uniqueId: 'HyoqVChakY-',
    locations: [
      {
        lineNumber: 112,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BJ2c4Ch61t-',
      },
    ],
  },
  palegreen: {
    uniqueId: 'S1a9E0npJKZ',
    locations: [
      {
        lineNumber: 113,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Bk094R2a1KZ',
      },
    ],
  },
  paleturquoise: {
    uniqueId: 'S1JiV02TyF-',
    locations: [
      {
        lineNumber: 114,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S1giE0361KZ',
      },
    ],
  },
  palevioletred: {
    uniqueId: 'HJWiNRhTkKZ',
    locations: [
      {
        lineNumber: 115,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B1fjV02pkKW',
      },
    ],
  },
  papayawhip: {
    uniqueId: 'Hy7jNCh6ytb',
    locations: [
      {
        lineNumber: 116,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SkViV03aJYW',
      },
    ],
  },
  peachpuff: {
    uniqueId: 'ryHi4A3aytb',
    locations: [
      {
        lineNumber: 117,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HkUsERnT1t-',
      },
    ],
  },
  peru: {
    uniqueId: 'SkvsEA3TJFW',
    locations: [
      {
        lineNumber: 118,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Bkdo4R26ytZ',
      },
    ],
  },
  pink: {
    uniqueId: 'HytjV03akYZ',
    locations: [
      {
        lineNumber: 119,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rk9jVAhTkt-',
      },
    ],
  },
  plum: {
    uniqueId: 'SJjs4Rn6kYb',
    locations: [
      {
        lineNumber: 120,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S1hiVC3aJtW',
      },
    ],
  },
  powderblue: {
    uniqueId: 'H1piNCnT1FW',
    locations: [
      {
        lineNumber: 121,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ByCjEChakFW',
      },
    ],
  },
  rebeccapurple: {
    uniqueId: 'H112VAhpJtW',
    locations: [
      {
        lineNumber: 122,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'r1ghEC3TyYZ',
      },
    ],
  },
  rosybrown: {
    uniqueId: 'S1ZhNChpkt-',
    locations: [
      {
        lineNumber: 123,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'r1M3NChTkK-',
      },
    ],
  },
  royalblue: {
    uniqueId: 'BJm3VA2ayFZ',
    locations: [
      {
        lineNumber: 124,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SkEnE0na1t-',
      },
    ],
  },
  saddlebrown: {
    uniqueId: 'SJS34CnayKb',
    locations: [
      {
        lineNumber: 125,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S183ECnakYb',
      },
    ],
  },
  salmon: {
    uniqueId: 'r1v34C3p1YW',
    locations: [
      {
        lineNumber: 126,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Hkd3ECn6JYW',
      },
    ],
  },
  sandybrown: {
    uniqueId: 'B1thE03pyYW',
    locations: [
      {
        lineNumber: 127,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HyqhVR26kKb',
      },
    ],
  },
  seagreen: {
    uniqueId: 'rJohVRhp1FZ',
    locations: [
      {
        lineNumber: 128,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Sk22N0361tb',
      },
    ],
  },
  seashell: {
    uniqueId: 'r1a2ECnTkKW',
    locations: [
      {
        lineNumber: 129,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ByR2VCh6kYZ',
      },
    ],
  },
  sienna: {
    uniqueId: 'Sy1aNA26JKW',
    locations: [
      {
        lineNumber: 130,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SkeTVA261tW',
      },
    ],
  },
  silver: {
    uniqueId: 'By-6NR3pkK-',
    locations: [
      {
        lineNumber: 131,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'H1M64ChaJtZ',
      },
    ],
  },
  skyblue: {
    uniqueId: 'HkmT4AnTJKb',
    locations: [
      {
        lineNumber: 132,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rJVaN03p1FZ',
      },
    ],
  },
  slateblue: {
    uniqueId: 'HySaNC2pyKb',
    locations: [
      {
        lineNumber: 133,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'By8pECnTyKZ',
      },
      {
        lineNumber: 171,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ryVJWVChpJKW',
      },
      {
        lineNumber: 173,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HyvJWVAnaJKZ',
      },
    ],
  },
  slategray: {
    uniqueId: 'B1DaVR26ktW',
    locations: [
      {
        lineNumber: 134,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'H1_pVAnp1tW',
      },
    ],
  },
  slategrey: {
    uniqueId: 'B1Y6VRh6ktZ',
    locations: [
      {
        lineNumber: 135,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJcpEA2pktb',
      },
    ],
  },
  snow: {
    uniqueId: 'HJoaNAh6kYW',
    locations: [
      {
        lineNumber: 136,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Bkha40hTJFZ',
      },
    ],
  },
  springgreen: {
    uniqueId: 'SJ6pER36JY-',
    locations: [
      {
        lineNumber: 137,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJC6NAnp1tb',
      },
    ],
  },
  steelblue: {
    uniqueId: 'HJ1AEAna1Y-',
    locations: [
      {
        lineNumber: 138,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyxRVR2aJFb',
      },
    ],
  },
  tan: {
    uniqueId: 'BJZCECnakK-',
    locations: [
      {
        lineNumber: 139,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'r1fCE0naJKb',
      },
    ],
  },
  teal: {
    uniqueId: 'S1XRVCnTyFZ',
    locations: [
      {
        lineNumber: 140,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'H1E04AnTkKZ',
      },
    ],
  },
  thistle: {
    uniqueId: 'SJH0E0nakFW',
    locations: [
      {
        lineNumber: 141,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rJL0EA2aJtW',
      },
    ],
  },
  tomato: {
    uniqueId: 'Syv04Rhaytb',
    locations: [
      {
        lineNumber: 142,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BJuR402a1t-',
      },
    ],
  },
  turquoise: {
    uniqueId: 'rkY040nTktZ',
    locations: [
      {
        lineNumber: 143,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rkcREA2pyK-',
      },
    ],
  },
  violet: {
    uniqueId: 'SkoRN02pJK-',
    locations: [
      {
        lineNumber: 144,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BJhA4AnTyK-',
      },
    ],
  },
  wheat: {
    uniqueId: 'S1TA402TyFW',
    locations: [
      {
        lineNumber: 145,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S1RCV0hTyYZ',
      },
    ],
  },
  whitesmoke: {
    uniqueId: 'SJ1yg4A361tb',
    locations: [
      {
        lineNumber: 146,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJg1gVAnpkF-',
      },
    ],
  },
  yellowgreen: {
    uniqueId: 'r1Z1xN02TJKW',
    locations: [
      {
        lineNumber: 147,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Byf1gN03T1YZ',
      },
    ],
  },
  aqua: {
    uniqueId: 'BJ7kg4A3T1FZ',
    locations: [
      {
        lineNumber: 148,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B1V1gNRh6kKb',
      },
    ],
  },
  yellow: {
    uniqueId: 'HkB1xERnpJYW',
    locations: [
      {
        lineNumber: 149,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJLygECnTJYW',
      },
    ],
  },
  white: {
    uniqueId: 'H1wyg4AnTkY-',
    locations: [
      {
        lineNumber: 150,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Hyu1gEChpytb',
      },
    ],
  },
  blue: {
    uniqueId: 'B1tygVRh61Y-',
    locations: [
      {
        lineNumber: 151,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'BkcJlNC2TkKW',
      },
      {
        lineNumber: 36,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'rktflVR3aJY-',
      },
      {
        lineNumber: 171,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HJXyWE0h6JKb',
      },
      {
        lineNumber: 172,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Bk81WN0npyYb',
      },
      {
        lineNumber: 2,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/style.css',
        uniqueId: 'ryeXZ4R2T1YW',
      },
      {
        lineNumber: 3,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/style.css',
        uniqueId: 'BJ-XW40nTkY-',
      },
      {
        lineNumber: 8,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/style.css',
        uniqueId: 'HkmQbVRnpJtb',
      },
      {
        lineNumber: 5,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/nest1/sassy.sass',
        uniqueId: 'HkYXW4A261tW',
      },
    ],
  },
  brown: {
    uniqueId: 'Hys1lNR3aytb',
    locations: [
      {
        lineNumber: 152,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'Bk2yxVAn6yt-',
      },
    ],
  },
  coral: {
    uniqueId: 'rkpkx4A26kKW',
    locations: [
      {
        lineNumber: 153,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'H1Ayx403pkFW',
      },
    ],
  },
  cyan: {
    uniqueId: 'B1yxxVA361Yb',
    locations: [
      {
        lineNumber: 154,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'rJexl4Ch6yYZ',
      },
      {
        lineNumber: 176,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJckZE03TkFb',
      },
      {
        lineNumber: 178,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Bk61WNR26ytW',
      },
    ],
  },
  gold: {
    uniqueId: 'B1Zex4R3p1KW',
    locations: [
      {
        lineNumber: 155,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SJMegVC2TkFW',
      },
    ],
  },
  gray: {
    uniqueId: 'SJQxxEChakKW',
    locations: [
      {
        lineNumber: 156,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'r1EglEA261Y-',
      },
    ],
  },
  grey: {
    uniqueId: 'S1HxlNRnaJFb',
    locations: [
      {
        lineNumber: 157,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ryUxeVChpkYb',
      },
    ],
  },
  green: {
    uniqueId: 'B1wel40h6JKZ',
    locations: [
      {
        lineNumber: 158,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'H1dxxNCnp1FZ',
      },
    ],
  },
  lavender: {
    uniqueId: 'HyYgx4CnTkKZ',
    locations: [
      {
        lineNumber: 159,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B19el40np1Fb',
      },
    ],
  },
  goldenrod: {
    uniqueId: 'BJoxl4Rhp1F-',
    locations: [
      {
        lineNumber: 160,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'S13xeEC3T1KW',
      },
    ],
  },
  lime: {
    uniqueId: 'rJ6xeVA2TJKW',
    locations: [
      {
        lineNumber: 161,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'By0xgER2pkFb',
      },
    ],
  },
  olive: {
    uniqueId: 'r11-xECnp1tb',
    locations: [
      {
        lineNumber: 162,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'B1lbeVAh6kKZ',
      },
    ],
  },
  orange: {
    uniqueId: 'rJ--g403TyKb',
    locations: [
      {
        lineNumber: 163,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'SyGWlNR2pJFZ',
      },
    ],
  },
  purple: {
    uniqueId: 'BkXbgVAhTytW',
    locations: [
      {
        lineNumber: 164,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'ByE-eNRnpyYZ',
      },
    ],
  },
  red: {
    uniqueId: 'S1SbgN0ha1Fb',
    locations: [
      {
        lineNumber: 165,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/helpers/regular-expressions.js',
        uniqueId: 'HJIWlVRhayKW',
      },
      {
        lineNumber: 18,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'SyDZeV0n61Kb',
      },
      {
        lineNumber: 35,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'SkuzxVChpkFb',
      },
      {
        lineNumber: 165,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HywReNChaJtb',
      },
      {
        lineNumber: 166,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJ90eVA261Kb',
      },
      {
        lineNumber: 170,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HypAlVC361KZ',
      },
      {
        lineNumber: 170,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B10CxNCn6ktW',
      },
      {
        lineNumber: 170,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'H1kkWERnpyYW',
      },
      {
        lineNumber: 170,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJl1ZVR3TJK-',
      },
      {
        lineNumber: 170,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJWybVA3pyYb',
      },
      {
        lineNumber: 170,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'H1MkW4RhTJYZ',
      },
      {
        lineNumber: 2,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/style.css',
        uniqueId: 'S1GMZVA3aJK-',
      },
      {
        lineNumber: 3,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/style.css',
        uniqueId: 'B1XMbVA2p1tZ',
      },
      {
        lineNumber: 8,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/style.css',
        uniqueId: 'ryHfZ4C3TJKW',
      },
    ],
  },
  '#000': {
    uniqueId: 'rJO-xNChaktb',
    locations: [
      {
        lineNumber: 19,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'H1tZxECnpktZ',
      },
      {
        lineNumber: 37,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'SyqfeNRnpJtZ',
      },
      {
        lineNumber: 8,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/index.html',
        uniqueId: 'rJhZ-EA26Jt-',
      },
      {
        lineNumber: 8,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/index.html',
        uniqueId: 'Sk9MbEAnpyFb',
      },
    ],
  },
  '#ffffff': {
    uniqueId: 'SkqWx4R261Y-',
    locations: [
      {
        lineNumber: 20,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'SJsZxNRnakYZ',
      },
      {
        lineNumber: 38,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'BkjzeEA3ayY-',
      },
      {
        lineNumber: 8,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/index.html',
        uniqueId: 'r1jbZ4AnTyYb',
      },
      {
        lineNumber: 8,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/index.html',
        uniqueId: 'SkYG-NC3akYW',
      },
    ],
  },
  '#ffffff00': {
    uniqueId: 'SJ3-g402aJKW',
    locations: [
      {
        lineNumber: 21,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'S1pbg4Cn61tZ',
      },
      {
        lineNumber: 4,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/style.css',
        uniqueId: 'SyVMZ4RhakFW',
      },
      {
        lineNumber: 9,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/style.css',
        uniqueId: 'SJIz-4R2a1Yb',
      },
    ],
  },
  '#0912': {
    uniqueId: 'r10ZeVA3TJtZ',
    locations: [
      {
        lineNumber: 22,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'H1JMe4An61Y-',
      },
      {
        lineNumber: 40,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'SkAGlVRhayF-',
      },
      {
        lineNumber: 10,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/style.css',
        uniqueId: 'SkvzWNR26kFZ',
      },
      {
        lineNumber: 10,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/style.css',
        uniqueId: 'H1B7ZV03TyFW',
      },
    ],
  },
  'rgb(123, 123, 231)': {
    uniqueId: 'H1gfxEC3pkYb',
    locations: [
      {
        lineNumber: 23,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'ryWfx4AhT1t-',
      },
      {
        lineNumber: 41,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'S1ymxEAnpyKb',
      },
      {
        lineNumber: 2,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/script.js',
        uniqueId: 'rJ6-WNR261K-',
      },
      {
        lineNumber: 14,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/style.css',
        uniqueId: 'rkOM-NC3T1KZ',
      },
      {
        lineNumber: 2,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/script.js',
        uniqueId: 'BJsf-4An6JYW',
      },
      {
        lineNumber: 14,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/style.css',
        uniqueId: 'BkImb402TyYW',
      },
      {
        lineNumber: 1,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/nest1/sassy.sass',
        uniqueId: 'ryDXW40npyY-',
      },
    ],
  },
  'rgba(89, 12, 31, 0.1)': {
    uniqueId: 'SJGzg4AhayFZ',
    locations: [
      {
        lineNumber: 24,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'ryXMlVC2akYb',
      },
      {
        lineNumber: 42,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'HJlXxNRn6yK-',
      },
      {
        lineNumber: 6,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/script.js',
        uniqueId: 'BJ0WWNA2TkKb',
      },
      {
        lineNumber: 11,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/script.js',
        uniqueId: 'HyxGW403TJK-',
      },
      {
        lineNumber: 6,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/script.js',
        uniqueId: 'ry3MWE0h6yYb',
      },
      {
        lineNumber: 11,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/script.js',
        uniqueId: 'SkCzZVR3Tyt-',
      },
      {
        lineNumber: 2,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/nest1/sassy.sass',
        uniqueId: 'rkdXW4An6JKW',
      },
    ],
  },
  'hsl(300, 12%, 31%)': {
    uniqueId: 'ryVzlEC3TkKZ',
    locations: [
      {
        lineNumber: 25,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'HJHGxNR2TJtb',
      },
      {
        lineNumber: 43,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'H1ZXgNRha1tb',
      },
      {
        lineNumber: 7,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/script.js',
        uniqueId: 'H1JMZVC36yFW',
      },
      {
        lineNumber: 7,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/script.js',
        uniqueId: 'SJpGbN0n61Kb',
      },
    ],
  },
  'hsla(300, 12%, 31%, 0.3)': {
    uniqueId: 'Hk8zlERhpkYb',
    locations: [
      {
        lineNumber: 26,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'BkDflVC261Fb',
      },
      {
        lineNumber: 44,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'Skz7x40haJFW',
      },
      {
        lineNumber: 12,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathA/script.js',
        uniqueId: 'BJZGZNChpkKZ',
      },
      {
        lineNumber: 12,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/script.js',
        uniqueId: 'HJJ7-4A3pJKZ',
      },
    ],
  },
  '#891048fa': {
    uniqueId: 'HknGeE0npkYW',
    locations: [
      {
        lineNumber: 39,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/palette-parser.test.js',
        uniqueId: 'B1pMl4A3TyKW',
      },
      {
        lineNumber: 4,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/style.css',
        uniqueId: 'HJzXW40naJYW',
      },
      {
        lineNumber: 9,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/pathB/style.css',
        uniqueId: 'HkEQZVAha1tZ',
      },
    ],
  },
  '#fff': {
    uniqueId: 'BymQeEA3aytW',
    locations: [
      {
        lineNumber: 19,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rJEQxV02TyFZ',
      },
      {
        lineNumber: 19,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJBmg4R2akFb',
      },
      {
        lineNumber: 61,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HybOgNR2p1Kb',
      },
      {
        lineNumber: 62,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BkVue402aJYW',
      },
      {
        lineNumber: 65,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'S18_eNR2TyYZ',
      },
      {
        lineNumber: 66,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HyJYg40npytb',
      },
    ],
  },
  '#123': {
    uniqueId: 'HyUXgVR3TJFW',
    locations: [
      {
        lineNumber: 20,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BywmlV0npkFZ',
      },
      {
        lineNumber: 20,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BkOQlEA2aJFZ',
      },
    ],
  },
  '#ACD': {
    uniqueId: 'BktQgNChTyY-',
    locations: [
      {
        lineNumber: 21,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hkqmg4C3pkt-',
      },
      {
        lineNumber: 21,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkoQx4C3aJtb',
      },
    ],
  },
  '#e4D': {
    uniqueId: 'SyhQgNRnakFW',
    locations: [
      {
        lineNumber: 22,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkT7lN0nTkY-',
      },
      {
        lineNumber: 22,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkAQgEC2ayYZ',
      },
    ],
  },
  '#abcd': {
    uniqueId: 'By1ExN0hakKW',
    locations: [
      {
        lineNumber: 23,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r1lNeEChaktZ',
      },
      {
        lineNumber: 23,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkbVlNAh6kFW',
      },
    ],
  },
  '#0000': {
    uniqueId: 'ByfVgV0npkK-',
    locations: [
      {
        lineNumber: 24,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkXEl4Ana1Y-',
      },
      {
        lineNumber: 24,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJENlEC36JYW',
      },
    ],
  },
  '#ABDD': {
    uniqueId: 'B1SEgEAh6kYb',
    locations: [
      {
        lineNumber: 25,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BkIEe4RnpJK-',
      },
      {
        lineNumber: 25,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SkvNlVA3akt-',
      },
    ],
  },
  '#3DdD': {
    uniqueId: 'HJu4xER2pyKZ',
    locations: [
      {
        lineNumber: 26,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1KEl402TkFW',
      },
      {
        lineNumber: 26,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Sk9NlVC3akFZ',
      },
    ],
  },
  '#eeeeee': {
    uniqueId: 'S1i4lNR3aJt-',
    locations: [
      {
        lineNumber: 27,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SknVgN0naytW',
      },
      {
        lineNumber: 27,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BkpNlEA2TyFb',
      },
    ],
  },
  '#123400': {
    uniqueId: 'SyREgVAnaJKW',
    locations: [
      {
        lineNumber: 28,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ryyre4Rn6JYZ',
      },
      {
        lineNumber: 28,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HklHx4Aha1tW',
      },
    ],
  },
  '#FDDFDA': {
    uniqueId: 'rJWSgV03a1KW',
    locations: [
      {
        lineNumber: 29,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkGBgV02aJK-',
      },
      {
        lineNumber: 29,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkXrl40npkKW',
      },
    ],
  },
  '#F4ab45': {
    uniqueId: 'BkVSx4AnayYZ',
    locations: [
      {
        lineNumber: 30,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r1BSlN02TktZ',
      },
      {
        lineNumber: 30,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ryUHlNR3T1K-',
      },
    ],
  },
  '#aaabbbcc': {
    uniqueId: 'r1PBx4AhpJtW',
    locations: [
      {
        lineNumber: 31,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Sk_rgVCnTkFb',
      },
      {
        lineNumber: 31,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ByKHeE03pyFZ',
      },
    ],
  },
  '#00011199': {
    uniqueId: 'Hk9HeNRn6yK-',
    locations: [
      {
        lineNumber: 32,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SkoHlVRhaJF-',
      },
      {
        lineNumber: 32,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkhBg4A361K-',
      },
    ],
  },
  '#ABDCCAAA': {
    uniqueId: 'r1aSeER36yYW',
    locations: [
      {
        lineNumber: 33,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1Crx4Rn61KZ',
      },
      {
        lineNumber: 33,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r11LxEA36yYb',
      },
    ],
  },
  '#BaD3320a': {
    uniqueId: 'rkxLg402TyFZ',
    locations: [
      {
        lineNumber: 34,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hy-LeN03pJt-',
      },
      {
        lineNumber: 34,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Syz8eVAnpJKZ',
      },
    ],
  },
  '#aaa': {
    uniqueId: 'B1mLxV0hpkKb',
    locations: [
      {
        lineNumber: 35,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ryVUxEChT1K-',
      },
      {
        lineNumber: 36,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BksLeNA3a1YW',
      },
    ],
  },
  '#4444': {
    uniqueId: 'BkBUeV03p1KW',
    locations: [
      {
        lineNumber: 35,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'H1IUxECnpkY-',
      },
      {
        lineNumber: 37,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkh8lV03pyt-',
      },
    ],
  },
  '#abCCd3': {
    uniqueId: 'rkwUgNC3a1FZ',
    locations: [
      {
        lineNumber: 35,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SyOIlVRnakFZ',
      },
      {
        lineNumber: 38,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rJp8gVA2p1FZ',
      },
    ],
  },
  '#AAA00011': {
    uniqueId: 'SJK8xEAhaytZ',
    locations: [
      {
        lineNumber: 35,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkqUeE0h6yYW',
      },
      {
        lineNumber: 39,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJR8xEC2pyt-',
      },
    ],
  },
  '#3333': {
    uniqueId: 'SykPlEA36yKZ',
    locations: [
      {
        lineNumber: 52,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ByxDlEC2aJtW',
      },
      {
        lineNumber: 52,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkbPx402p1FW',
      },
    ],
  },
  '#bbab': {
    uniqueId: 'ByzveVR3T1tZ',
    locations: [
      {
        lineNumber: 53,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'S17wxER2pJtb',
      },
      {
        lineNumber: 53,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B14Pl4RnTJKb',
      },
    ],
  },
  '#B34': {
    uniqueId: 'HJBwg4A26kKZ',
    locations: [
      {
        lineNumber: 54,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJLwx40na1tb',
      },
      {
        lineNumber: 54,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkvPxEC2ayF-',
      },
    ],
  },
  '#A9B3C2': {
    uniqueId: 'rJuDl403a1K-',
    locations: [
      {
        lineNumber: 55,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r1YPgN0n6yKW',
      },
      {
        lineNumber: 55,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hy5wg4RhaJK-',
      },
    ],
  },
  '#482cBade': {
    uniqueId: 'ByjwxVA3T1Kb',
    locations: [
      {
        lineNumber: 56,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hy2DxNRh6yFb',
      },
      {
        lineNumber: 56,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkpvlVAhTkYb',
      },
    ],
  },
  '#3445': {
    uniqueId: 'S1RvgE036yF-',
    locations: [
      {
        lineNumber: 57,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkkOgER26kY-',
      },
      {
        lineNumber: 57,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJe_eV0hpyKb',
      },
    ],
  },
  '#e9fcca': {
    uniqueId: 'BJzulNC2T1Y-',
    locations: [
      {
        lineNumber: 61,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HymOx4Cn61KW',
      },
      {
        lineNumber: 63,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkHOgER2pJtW',
      },
    ],
  },
  '#e555': {
    uniqueId: 'HyDOg4CnakKZ',
    locations: [
      {
        lineNumber: 65,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rJOdlNC3TkKZ',
      },
      {
        lineNumber: 67,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1xYlNA26kY-',
      },
    ],
  },
  '#110aab': {
    uniqueId: 'Hkt_e4Rh6JKW',
    locations: [
      {
        lineNumber: 65,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'H1cdeVA361Kb',
      },
      {
        lineNumber: 68,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJbKe4Rhp1t-',
      },
    ],
  },
  '#Bbac4591': {
    uniqueId: 'Skodl402akFZ',
    locations: [
      {
        lineNumber: 65,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hkhux402TkK-',
      },
      {
        lineNumber: 69,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1zFgV0h6kKZ',
      },
    ],
  },
  '#fa0': {
    uniqueId: 'r1augE0nTktZ',
    locations: [
      {
        lineNumber: 65,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rJRdxER3TJF-',
      },
      {
        lineNumber: 70,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SyQtx403pkKW',
      },
    ],
  },
  'rgb(255, 255, 255)': {
    uniqueId: 'rJNYeVR2TJY-',
    locations: [
      {
        lineNumber: 80,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJHYe4RhpyK-',
      },
      {
        lineNumber: 80,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HyLFxVR3pyKb',
      },
    ],
  },
  'rgb(0, 5, 78)': {
    uniqueId: 'BJvFeVA2pyF-',
    locations: [
      {
        lineNumber: 81,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ryOtxEC2TkY-',
      },
      {
        lineNumber: 81,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'r1FFeNC3akFW',
      },
    ],
  },
  'rgb(0, 0, 0)': {
    uniqueId: 'HkcFeN0hpkY-',
    locations: [
      {
        lineNumber: 82,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SysFeNR3pktb',
      },
      {
        lineNumber: 82,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1nKxEC3aJKb',
      },
    ],
  },
  'rgb(123, 96, 01 )': {
    uniqueId: 'rkpFgNR26ktW',
    locations: [
      {
        lineNumber: 83,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HyRYxNChpytb',
      },
      {
        lineNumber: 83,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJ1cxEC36JKb',
      },
    ],
  },
  'rgb(150, 150, 150)': {
    uniqueId: 'HyxqlVAhT1tb',
    locations: [
      {
        lineNumber: 84,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'By-qgVAnTyYb',
      },
      {
        lineNumber: 84,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hkz5l4C3p1F-',
      },
    ],
  },
  'rgba(0, 0, 0, 0)': {
    uniqueId: 'BkQ9lER2TkFb',
    locations: [
      {
        lineNumber: 85,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rk4cgVA3TJKW',
      },
      {
        lineNumber: 85,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BkSqxEC2TyFb',
      },
    ],
  },
  'rgba(123, 19, 10, 0.5)': {
    uniqueId: 'rkLqlVAnpyFZ',
    locations: [
      {
        lineNumber: 86,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Syv5xVAnayt-',
      },
      {
        lineNumber: 86,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'S1_qe4Chpyt-',
      },
    ],
  },
  'rgba(255, 255, 255, 0.1)': {
    uniqueId: 'HktcgN02TkFb',
    locations: [
      {
        lineNumber: 87,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hyqce4Rhp1YZ',
      },
      {
        lineNumber: 88,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SyicgERhpJF-',
      },
    ],
  },
  'rgba(1, 2, 3, 0.)': {
    uniqueId: 'rknqeECn61FZ',
    locations: [
      {
        lineNumber: 90,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Bk6cgNCnp1t-',
      },
      {
        lineNumber: 90,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HJAclNR3aJY-',
      },
    ],
  },
  'rgba(1,2,3,1)': {
    uniqueId: 'SkkigER36kKW',
    locations: [
      {
        lineNumber: 91,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkljxNC2TkFZ',
      },
      {
        lineNumber: 91,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HkZjgNA3TyK-',
      },
    ],
  },
  'rgba(03, 002, 3, 0.001)': {
    uniqueId: 'H1MixN0naJYZ',
    locations: [
      {
        lineNumber: 92,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'ByQogEA26yKZ',
      },
      {
        lineNumber: 92,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'By4olN03akYW',
      },
    ],
  },
  'rgba(3   ,2 ,3 ,0.3  )': {
    uniqueId: 'ryBsx4R26JK-',
    locations: [
      {
        lineNumber: 93,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJLsxNRn6ktb',
      },
      {
        lineNumber: 93,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1DjlVRhpJtb',
      },
    ],
  },
  'rgba(  3  ,  2  ,  3  ,  0.3  )': {
    uniqueId: 'BkusxNR2Tktb',
    locations: [
      {
        lineNumber: 94,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HyFjgNAh6kFW',
      },
      {
        lineNumber: 95,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HJ5igV03pkKZ',
      },
    ],
  },
  'RGB(255, 45, 10)': {
    uniqueId: 'Skiil4Ah6JKZ',
    locations: [
      {
        lineNumber: 97,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HJnoxVA2pkKW',
      },
      {
        lineNumber: 97,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJaogERhTkYZ',
      },
    ],
  },
  'RgB(255, 45, 10)': {
    uniqueId: 'Hk0sxVA36kYW',
    locations: [
      {
        lineNumber: 98,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Bkynx4A2aJK-',
      },
      {
        lineNumber: 98,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Bye2gVRnTkYW',
      },
    ],
  },
  'hsl(12, 25%, 23%)': {
    uniqueId: 'r1Zng4A3T1K-',
    locations: [
      {
        lineNumber: 120,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Skzhx4Ch61K-',
      },
      {
        lineNumber: 120,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJQ2eECn61F-',
      },
    ],
  },
  'hsl(0, 100%, 0%)': {
    uniqueId: 'BkEhl40hT1FZ',
    locations: [
      {
        lineNumber: 121,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJr3g4RhTytb',
      },
      {
        lineNumber: 121,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hk82lERnT1Fb',
      },
    ],
  },
  'HSL(12, 25%, 23%)': {
    uniqueId: 'H1DneVC3TJFb',
    locations: [
      {
        lineNumber: 122,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJ_hgEAnTkY-',
      },
      {
        lineNumber: 122,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'B1K2xNA361tZ',
      },
    ],
  },
  'hsl(360, 0%, 100%)': {
    uniqueId: 'BJ92xVCn61FW',
    locations: [
      {
        lineNumber: 123,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HJj3lV02a1KW',
      },
      {
        lineNumber: 123,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Byhnl40np1t-',
      },
    ],
  },
  'hsl( 30  ,0%  , 10%  )': {
    uniqueId: 'HkT3xEC2pJFb',
    locations: [
      {
        lineNumber: 124,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'HyC3eN03p1Kb',
      },
      {
        lineNumber: 124,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Syk6gNA261F-',
      },
    ],
  },
  'hsla( 30  ,0%  , 10% ,0 )': {
    uniqueId: 'SJxpxNA2aJYW',
    locations: [
      {
        lineNumber: 125,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rybpgEA36kYW',
      },
      {
        lineNumber: 126,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'H1fTgVR3pyK-',
      },
    ],
  },
  'HSLA(125, 100%, 10%, 0.4)': {
    uniqueId: 'Skmpx4C2T1Kb',
    locations: [
      {
        lineNumber: 128,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hy4plVCnTyYW',
      },
      {
        lineNumber: 129,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'BJS6lVA36JKb',
      },
    ],
  },
  'hsl(30,0%,10%)': {
    uniqueId: 'Bk8TeNC3p1YW',
    locations: [
      {
        lineNumber: 131,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Syw6xNC3a1F-',
      },
      {
        lineNumber: 132,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SkcpxE03pyYb',
      },
    ],
  },
  'hsla(356, 23%, 100%, 0.12)': {
    uniqueId: 'SJOal4ChayFb',
    locations: [
      {
        lineNumber: 131,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJFpeEA2ayFW',
      },
      {
        lineNumber: 133,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'SJiaeNR26yYZ',
      },
    ],
  },
  'hsla(272, 40%, 90%, 1.0)': {
    uniqueId: 'H13ae4R3p1KZ',
    locations: [
      {
        lineNumber: 135,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'Hy6peNRhpJYZ',
      },
      {
        lineNumber: 136,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/tests/regular-expressions.test.js',
        uniqueId: 'rkATeNAn6yYW',
      },
    ],
  },
  '#0f0f0f': {
    uniqueId: 'SyD--EA36JKZ',
    locations: [
      {
        lineNumber: 9,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/src/utils/color-manipulation.js',
        uniqueId: 'rJObW4Rn6ytW',
      },
    ],
  },
  '#f4f2f3': {
    uniqueId: 'Syt-ZN036yKZ',
    locations: [
      {
        lineNumber: 9,
        filePath:
          '/Users/StarWolf/Code/Github/Project-Palette/temp/4be21791f8b134442c52143ca29922ec2a3db2d12435f38761ca44933a60180dB170naJYW/src/utils/color-manipulation.js',
        uniqueId: 'Byc--EA3pJYZ',
      },
    ],
  },
});
