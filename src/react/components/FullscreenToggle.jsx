import React from "react";

import MaterialIcon from "./MaterialIcon.jsx";

function FullscreenToggle({isActive}) {
    return (
        <MaterialIcon
            iconName={isActive ? "fullscreen_exit" : "fullscreen"}
            titleText={isActive ? "Exit Fullscreen" : "Enter Fullscreen"}
        />
    );
}

export default FullscreenToggle;
