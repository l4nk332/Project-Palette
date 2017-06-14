const styles = `
    .swatch {
        width: 200px;
        height: 200px;
        margin: 20px;
    }

    .pallete {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: space-evenly;
    }
`.trim();

const generateColorSwatches = (colorMap) => {
    return Object.keys(colorMap).map(color => {
        return `<div class='swatch' style='background: ${color}'></div>`;
    }).join("");
};

const generateHtml = (colorMap) => {
    return `
        <html>
            <head>
                <meta charset='UTF-8'>
            </head>
            <body>
                <style>
                    ${styles}
                </style>
                <div class='pallete'>
                    ${generateColorSwatches(colorMap)}
                </div>
            </body>
        </html>`.trim();
};

module.exports = generateHtml;
