import React from "react";

import ColorSwatch from "./ColorSwatch.jsx";

const PaletteView = ({ colorPalette, backgroundColor, changeBackground }) => {
    let colorSwatches = Object.keys(colorPalette).map(color => {
        return (
            <ColorSwatch
                color={color}
                locations={colorPalette[color].locations}
                key={colorPalette[color].uniqueId}
            />
        );
    });

    return (
        <div style={{ backgroundColor: backgroundColor }}>
            <div style={{ textAlign: 'center' }}>
                <input type='color' onChange={changeBackground} />
            </div>
            <div className="palette">{colorSwatches}</div>
        </div>
    );
};

export default PaletteView;
