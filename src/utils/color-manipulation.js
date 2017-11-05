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
