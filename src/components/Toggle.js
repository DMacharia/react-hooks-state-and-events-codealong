import React, { useState } from "react";

function Toggle() {
	const [isOn, setIsOn] = useState(true);

	function handleClick() {
		setIsOn((isOn) => !isOn);
	}

	const color = isOn ? "green" : "red";

	return (
		<button style={{ backgroundColor: color }} onClick={handleClick}>
			{" "}
			{isOn ? "ON" : "OFF"}
		</button>
	);
}

export default Toggle;
