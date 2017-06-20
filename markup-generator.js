const styles = `
    html, body {
        margin: 0;
        padding: 0;
    }

    h5 {
        text-align: center;
    }

    .swatch-container {
        margin: 20px;
    }

    .swatch {
        width: 200px;
        height: 200px;
        margin: 20px auto;
    }

    .pallete {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: space-evenly;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
`.trim();

const generateColorLocationInfo = (colorLocations) => {
    return colorLocations.map(location => {
        return `
            <li>
                <a href="file://${location.filePath}" target="_blank"><code>${location.filePath}: ${location.lineNumber}</code></a>
            </li>
        `;
    }).join("");
};

const generateColorSwatches = (colorMap) => {
    return Object.keys(colorMap).map(color => {
        return `
            <div class='swatch-container'>
                <h5>${color}</h5>
                <div class='swatch' style='background: ${color}'></div>
                <ul>${generateColorLocationInfo(colorMap[color])}</ul>
            </div>
        `;
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
                <div style='text-align: center'>
                    <input type='color' />
                <div>
                <div class='pallete'>
                    ${generateColorSwatches(colorMap)}
                </div>
                <script>
                    var colorPicker = document.querySelector("[type='color']");
                    colorPicker.addEventListener('change', function(e) {
                        document.body.style = e.target.value;
                    });
                </script>
            </body>
        </html>`.trim();
};

module.exports = generateHtml;
