import React from "react";
import ReactDOM from "react-dom";

import colorPalette from "../color-palette.json";


const ColorLocation = ({filePath, lineNumber}) => {
	return (
		<li>
			<a href={"file://" + filePath} target="_blank">
				<code>{filePath}: {lineNumber}</code>
			</a>
		</li>
	);
}

const ColorSwatch = ({color, locations}) => {
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
			<h5>{color}</h5>
			<div className="swatch" style={{ background: color }}></div>
			<ul>{colorLocationInfo}</ul>
		</div>
	);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "#ffffff"
        };

        this.changeBackground = this.changeBackground.bind(this);
    }

    changeBackground(event) {
        let newColor = event.target.value;
        this.setState({
            backgroundColor: newColor
        });
    }

	render() {
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
			<div style={{ backgroundColor: this.state.backgroundColor }}>
				<div style={{ textAlign: 'center' }}>
					<input type='color' onChange={this.changeBackground} />
				</div>
				<div className="palette">{colorSwatches}</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
