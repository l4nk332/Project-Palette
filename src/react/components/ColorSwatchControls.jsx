import React from "react";

import FullscreenToggle from "./FullscreenToggle.jsx";
import FillColorControl from "./FillColorControl.jsx";
import RevertColorControl from "./RevertColorControl.jsx";
import RemoveColorControl from "./RemoveColorControl.jsx";

function ColorSwatchControls() {
    return (
        <div>
            <FullscreenToggle isActive={false} />
            <FillColorControl />
            <RevertColorControl />
            <RemoveColorControl />
        </div>
    );
}

export default ColorSwatchControls;
