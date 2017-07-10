import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import SearchView from "./components/SearchView.jsx";
import PaletteView from "./components/PaletteView.jsx";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "#ffffff",
            colorPalette: {},
            isLoading: false
        };

        this.getProjectColors = this.getProjectColors.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
    }

    getProjectColors(repoUrl) {
        this.setState({ isLoading: true });

        let self = this;

        $.ajax({
            url: "/colors",
            method: "GET",
            data: {
                repoUrl: repoUrl
            }
        }).done((jsonColorMap) => {
            let colorPalette = JSON.parse(jsonColorMap);
            self.setState((prevState) => {
                return Object.assign({}, prevState, {colorPalette: colorPalette, isLoading: false});
            });
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

    setView() {
        if (this.state.isLoading) {
            return <h1>Loading...</h1>;
        } else if (Object.keys(this.state.colorPalette).length > 0) {
            return (
                <PaletteView
                    colorPalette={this.state.colorPalette}
                    backgroundColor={this.state.backgroundColor}
                    changeBackground={this.changeBackground}
                />
            );
        } else {
            return (
                <SearchView
                    getProjectColors={this.getProjectColors}
                />
            );
        }
    }

	render() {
        return this.setView();
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
