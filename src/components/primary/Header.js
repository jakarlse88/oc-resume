import React from "react";

const Header = props => {
	const { firstName, lastName, title } = props;

	return (
		<header>
			<h1 class="main-heading">
				<span class="heading-first-name">{firstName}</span>
				<span class="heading-last-name">{lastName}</span>
			</h1>
			<p class="main-heading-subtitle">{title}</p>
		</header>
	);
};

export default Header;
