import React from "react";
import ReactDOM from "react-dom";

import colorPalette from "../color-palette.json";


export default class App extends React.Component {
    render() {
        let colorSwatches = Object.keys(colorPalette).map(color => {
            return (
                <ColorSwatch color={color} locations={colorPalette[color]} />
            );
        });

        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <input type='color' />
                <div>
                <div className='palette'></div>
            </div>
        );
    }
}

const ColorSwatch = ({color, locations}) => {
    let colorLocationInfo = locations.map(location => {
        return (
            <ColorLocation
                filePath={location.filePath}
                lineNumber={location.lineNumber}
            />
        );
    });

    return (
        <div className="swatch-container">
            <h5>{color}</h5>
            <div className="swatch" style={{ background: color }}></div>
            <ul></ul>
        </div>
    );
};

const ColorLocation = ({filePath, lineNumber}) => {
    return (
        <li>
            <a href={"file://" + filePath} target="_blank">
                <code>{filePath}: {lineNumber}</code>
            </a>
        </li>
    );
}

ReactDOM.mount(<App />, document.body);
