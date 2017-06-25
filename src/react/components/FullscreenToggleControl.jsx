import React from "react";

import MaterialIcon from "./MaterialIcon.jsx";

function FullscreenToggleControl({isActive}) {
    return (
        <MaterialIcon
            iconName={isActive ? "fullscreen_exit" : "fullscreen"}
            titleText={isActive ? "Exit fullscreen" : "Enter fullscreen"}
        />
    );
}

export default FullscreenToggleControl;
