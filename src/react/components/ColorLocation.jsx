import React from "react";

function ColorLocation({filePath, lineNumber}) {
	return (
		<li>
			<a
                href={"file://" + filePath}
                title={"file://" + filePath}
                target="_blank">
                <code>{filePath}: {lineNumber}</code>
			</a>
		</li>
	);
}

export default ColorLocation;
