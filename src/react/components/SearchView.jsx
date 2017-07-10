import React from "react";

export default class SearchView extends React.Component {
    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event) {
        // Enter key
        if (event.which === 13) {
            let fieldValue = event.target.value;
            this.props.getProjectColors(fieldValue);
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="https://github.com/lamesjim/HeartCaller"
                    onKeyUp={this.handleKeyUp}
                />
            </div>
        );
    }
};
