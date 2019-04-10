import React from "react";

const Header = props => {
	const { firstName, lastName, title } = props;

	return (
		<header>
			<h1 className="main-heading">
				<span className="heading-first-name">{firstName}</span>
				<span className="heading-last-name">{lastName}</span>
			</h1>
			<p className="main-heading-subtitle">{title}</p>
		</header>
	);
};

export default Header;
