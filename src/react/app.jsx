import React from "react";
import ReactDOM from "react-dom";

import colorPalette from "../color-palette.json";

import ColorSwatch from "./components/ColorSwatch.jsx";


export default class App extends React.Component {
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
