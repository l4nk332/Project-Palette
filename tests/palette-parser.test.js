/* global describe:false, test:false, expect:false, jasmine:false */

const path = require('path');
const PaletteParser = require('../helpers/palette-parser');

// Increase timeout time
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

/* Test Generation of Color Map */
/* ============================ */

describe('Test PaletteParser Color Map Generation', () => {
  test('Should generate color map for valid path', () => {
    expect.assertions(9);
    const dirPath = path.join(__dirname, 'pathA');
    const parser = new PaletteParser(dirPath);
    return parser.generateColorMap().then(colorMap => {
      expect(colorMap.red.locations).toHaveLength(3);
      expect(colorMap['#000'].locations).toHaveLength(1);
      expect(colorMap['#ffffff'].locations).toHaveLength(1);
      expect(colorMap['#ffffff00'].locations).toHaveLength(2);
      expect(colorMap['#0912'].locations).toHaveLength(1);
      expect(colorMap['rgb(123, 123, 231)'].locations).toHaveLength(2);
      expect(colorMap['rgba(89, 12, 31, 0.1)'].locations).toHaveLength(2);
      expect(colorMap['hsl(300, 12%, 31%)'].locations).toHaveLength(1);
      expect(colorMap['hsla(300, 12%, 31%, 0.3)'].locations).toHaveLength(1);
    });
  });

  test('Should generate a new color map when run on a different path', () => {
    expect.assertions(10);
    const dirPath = path.join(__dirname, 'pathB');
    const parser = new PaletteParser(dirPath);
    return parser.generateColorMap().then(colorMap => {
      expect(colorMap.red).toBeUndefined();
      expect(colorMap.blue.locations).toHaveLength(4);
      expect(colorMap['#000'].locations).toHaveLength(1);
      expect(colorMap['#ffffff'].locations).toHaveLength(1);
      expect(colorMap['#891048fa'].locations).toHaveLength(2);
      expect(colorMap['#0912'].locations).toHaveLength(1);
      expect(colorMap['rgb(123, 123, 231)'].locations).toHaveLength(3);
      expect(colorMap['rgba(89, 12, 31, 0.1)'].locations).toHaveLength(3);
      expect(colorMap['hsl(300, 12%, 31%)'].locations).toHaveLength(1);
      expect(colorMap['hsla(300, 12%, 31%, 0.3)'].locations).toHaveLength(1);
    });
  });

  test('Should reject with an error for invalid path in generation of color map', async () => {
    try {
      const parser = PaletteParser('does/not/exist');
      await parser.generateColorMap();
    } catch (err) {
      expect(() => {
        throw err;
      }).toThrowError(err);
    }
  });

  test('Should reject with an error for invalid path in generating color map', async () => {
    const dirPath = path.join(__dirname, 'does/not/exist');
    const parser = new PaletteParser(dirPath);
    await expect(parser.generateColorMap()).rejects.toHaveProperty(
      'code',
      'ENOENT',
    );
  });
});

/* Test determining action based on path */
/* ===================================== */

describe('Test Logic to Determine Action Based on Path', () => {
  test('Should reject with an error for invalid path in determining path action', async () => {
    const dirPath = path.join(__dirname, 'does/not/exist');
    const parser = new PaletteParser(dirPath);
    await expect(parser.determinePathAction(dirPath)).rejects.toHaveProperty(
      'code',
      'ENOENT',
    );
  });

  test('Should resolve with empty when determining a path action for something that is not a file or directory', async () => {
    const dirPath = path.join(__dirname, 'pathD', 'empty-symlink.test');
    const parser = new PaletteParser(dirPath);
    await expect(parser.determinePathAction(dirPath)).resolves.toBeUndefined();
  });

  test('Should resolve with undefined when parsing an empty directory', async () => {
    const dirPath = path.join(__dirname, 'pathC');
    const parser = new PaletteParser(dirPath);
    await expect(parser.determinePathAction(dirPath)).resolves.toBeUndefined();
  });
});
