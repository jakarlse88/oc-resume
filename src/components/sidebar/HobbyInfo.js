import React from "react";

const HobbyInfo = props => (
	<div className="bio-hobbies" id="bio-hobbies" aria-hidden="true">
		<div className="hobbies-container" aria-hidden="true">
			<h2 className="sidebar-heading">Hobbies</h2>
			<div className="icon-container" aria-hidden="true">
				{props.hobbies.map(item => (
					<i class={`fa fa-3x ${item} hobby-icon`} />
				))}
			</div>
		</div>
	</div>
);

export default HobbyInfo;
