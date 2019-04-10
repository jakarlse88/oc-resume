import React from "react";
import img from "./img.jpg";

export default function Avatar(props) {
	return (
		<div id="avatar-container" aria-hidden="true">
			<img src={img} alt="Jon Karlsen" className="avatar" />
		</div>
	);
}
