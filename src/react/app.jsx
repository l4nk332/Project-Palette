import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import ColorSwatch from "./components/ColorSwatch.jsx";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "#ffffff",
            colorPalette: {}
        };

        this.changeBackground = this.changeBackground.bind(this);
    }

    componentDidMount() {
        let self = this;

        $.ajax({
            url: "/colors",
            method: "GET",
            data: {
                repoUrl: "https://github.com/l4nk332/computer-tennis"
            }
        }).done((jsonColorMap) => {
            let colorPalette = JSON.parse(jsonColorMap);
            self.setState((prevState) => {
                return Object.assign({}, prevState, {colorPalette});
            })
        }).catch((err) => {
            console.error(err);
        });
    }

    changeBackground(event) {
        let newColor = event.target.value;
        this.setState({
            backgroundColor: newColor
        });
    }

	render() {
	    let colorSwatches = Object.keys(this.state.colorPalette).map(color => {
		    return (
				<ColorSwatch
                    color={color}
                    locations={this.state.colorPalette[color].locations}
                    key={this.state.colorPalette[color].uniqueId}
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
