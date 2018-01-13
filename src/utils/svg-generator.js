import {getTextColor} from './color-manipulation';

export default class SvgGenerator {
  constructor(colors, projectName) {
    this.colors = colors;
    this.projectName = projectName;
    this.numberOfColumns = 4;
    this.numberOfRows = Math.ceil(this.colors.length / this.numberOfColumns);
    this.swatchWidth = 250;
    this.swatchHeight = 200;
    this.svgWidth = this.numberOfColumns * this.swatchWidth;
    this.svgHeight = this.numberOfRows * this.swatchHeight;
  }

  calculateCoordinates(idx) {
    return {
      x: (idx % this.numberOfColumns) * this.swatchWidth,
      y: Math.floor(idx / this.numberOfColumns) * this.swatchHeight,
    };
  }

  generateSwatches() {
    const swatches = this.colors.map((color, idx) => {
      const {x, y} = this.calculateCoordinates(idx);
      const paddingTB = 20;
      const paddingLR = 10;
      const colorWidth = this.swatchWidth - paddingTB;
      const colorHeight = this.swatchHeight - paddingLR;

      return `
        <rect fill="${color}"
              width="${colorWidth - paddingLR}"
              height="${colorHeight - paddingTB}"
              x="${x + (paddingLR / 2)}"
              y="${y + (paddingTB / 4)}"
              rx="2"
              ry="2"></rect>
        <text x="${x + (paddingLR * 2)}"
              y="${y + (paddingTB * 2)}"
              fill="${getTextColor(color)}"
              style="font-size: 16px; font-family: Helvetica;">
          ${color}
        </text>
      `.trim();
    });

    return swatches.join('');
  }

  render() {
    return (
      `
      <svg version="1.1"
           baseProfile="full"
           width="${this.svgWidth}" height="${this.svgHeight}"
           viewBox="0 0 ${this.svgWidth} ${this.svgHeight}"
           xmlns="http://www.w3.org/2000/svg">
        ${this.generateSwatches()}
      </svg>
      `.trim().replace(/\s{2,}/g, ' ')
    );
  }
}
