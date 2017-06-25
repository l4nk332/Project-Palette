import React from "react";

import "../../../node_modules/material-design-icons/iconfont/material-icons.css";

function MaterialIcon({iconName, titleText}) {
    return (
        <i className="material-icons" title={titleText}>{iconName}</i>
    );
}

export default MaterialIcon;
