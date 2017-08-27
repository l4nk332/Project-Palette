import tinycolor from 'tinycolor2'

export function getTextColor(color) {
  const backgroundIsDark = tinycolor(color).isDark()
  const backgroundIsTransparent = tinycolor(color).getAlpha() < 0.6
  const textShouldBeDark = (backgroundIsTransparent
                            || !backgroundIsDark)

  return textShouldBeDark ? '#0f0f0f' : '#f4f2f3'
}