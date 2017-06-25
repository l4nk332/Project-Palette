import React from "react";

import ColorLocation from "./ColorLocation.jsx";
import ColorSwatchControls from "./ColorSwatchControls.jsx";

function ColorSwatch({color, locations}) {
	let colorLocationInfo = locations.map(location => {
		return (
			<ColorLocation
				filePath={location.filePath}
				lineNumber={location.lineNumber}
                key={location.uniqueId}
			/>
		);
	});

	return (
		<div className="swatch-container">
            <ColorSwatchControls />
			<h5>{color}</h5>
			<div className="swatch" style={{ background: color }}></div>
			<ul>{colorLocationInfo}</ul>
		</div>
	);
}

export default ColorSwatch;
