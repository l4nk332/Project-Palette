import tinycolor from 'tinycolor2';

export const getTextColor = color => {
  const backgroundIsDark = tinycolor(color).isDark();
  const backgroundIsTransparent = tinycolor(color).getAlpha() < 0.6;
  const textShouldBeDark = backgroundIsTransparent || !backgroundIsDark;

  return textShouldBeDark ? '#0f0f0f' : '#f4f2f3';
};

export const getAlphaBackgroundColor = (color, alpha = '0.05') => {
  const backgroundColor = getTextColor(color);

  return tinycolor(backgroundColor).setAlpha(alpha);
};

export const makeOpaque = color => tinycolor(color).setAlpha(1);

export const getContrastPercentages = colors => {
  if (!colors.length) {
    return {light: 0, dark: 0};
  }

  const darkCount = colors.filter(color => tinycolor(color).isDark()).length;
  const darkPercentage = (darkCount / colors.length) * 100;
  const lightPercentage = 100 - darkPercentage;

  return {light: lightPercentage, dark: darkPercentage};
};

const emptyColorAverage = () => ({
  hue: 0,
  saturation: 0,
  lightness: 0,
  alpha: 0,
});

export const getColorAverages = colors => (
  colors && colors.length
    ? (
      Object.entries(
        colors
          .map(color => tinycolor(color).toHsl())
          .reduce((colorAcc, color) => ({
            hue: colorAcc.hue + color.h,
            saturation: colorAcc.saturation + (color.s * 100),
            lightness: colorAcc.lightness + (color.l * 100),
            alpha: colorAcc.alpha + color.a,
          }), emptyColorAverage()),
      ).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: Number((value / colors.length).toFixed(2)),
      }), {})
    ) : emptyColorAverage()
);

export const toPercentage = (amount, limit = 100) => (
  Math.round((amount / limit) * 100)
);
