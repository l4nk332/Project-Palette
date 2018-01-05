class SvgGenerator {
  constructor(colors) {
    this.colors = colors;
    this.swatchWidth = 50;
    this.swatchHeight = 50;
    this.svgWidth = 800;
    this.svgHeight = (this.svgWidth / this.swatchWidth) * this.swatchHeight;
  }

  calculateCoordinates(idx) {
    return {
      x: ((this.svgWidth / this.swatchWidth) % (idx + 1)) * this.swatchWidth,
      y: ((this.svgWidth / this.swatchWidth) % (idx + 1)) * this.swatchHeight,
    };
  }

  generateSwatches() {
    const swatches = this.colors.map((color, idx) => {
      const {x, y} = this.calculateCoordinates(idx);
      return `
        <rect fill="${color}"
              width="${this.swatchWidth}"
              height="${this.swatchHeight}"
              x="${x}"
              y="${y}"
              rx="2"
              ry="2"></rect>
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
           xmlns="http://www.w3.org/2000/svg">${this.generateSwatches()}</svg>
      `.trim().replace(/\s{2,}/g, ' ')
    );
  }
}

module.exports = SvgGenerator;
