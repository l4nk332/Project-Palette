import React from "react";

function MaterialIcon({iconName, titleText}) {
    return (
        <i className="material-icons" title={titleText}>{iconName}</i>
    );
}

export default MaterialIcon;
