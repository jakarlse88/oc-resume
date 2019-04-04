import React from "react";

export default function Avatar(props) {
	return (
		<div id="avatar-container" aria-hidden="true">
			<img src={props.imgUrl} alt="Jon Karlsen" className="avatar" />
		</div>
	);
}
