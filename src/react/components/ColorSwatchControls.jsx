import React from "react";

import FullscreenToggleControl from "./FullscreenToggleControl.jsx";
import FillColorControl from "./FillColorControl.jsx";
import ColorizeControl from "./ColorizeControl.jsx";
import RevertColorControl from "./RevertColorControl.jsx";
import RemoveColorControl from "./RemoveColorControl.jsx";

function ColorSwatchControls() {
    return (
        <div>
            <FullscreenToggleControl isActive={false} />
            <FillColorControl />
            <ColorizeControl />
            <RevertColorControl />
            <RemoveColorControl />
        </div>
    );
}

export default ColorSwatchControls;
