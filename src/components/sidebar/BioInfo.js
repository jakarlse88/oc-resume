import React from "react";

const BioInfo = props => {
	return (
		<div className="bio-info" aria-hidden="true">
			<h2 className="sidebar-heading">About Me</h2>
			<div aria-hidden="true" className="bio-about-container">
				<p>{props.aboutMe}</p>
			</div>
		</div>
	);
};

export default BioInfo;
