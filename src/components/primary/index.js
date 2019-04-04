import React from "react";
import Header from "./Header";
import Education from "./Education";

import data from "../../data";
import Experience from "./Experience";
import References from "./References";

const Primary = () => {
	const { biography, education, experience, references } = data;

	return (
		<section className="main">
			<Header {...biography} />

			<Education education={education} />

			<Experience experience={experience} />

			<References references={references} />
		</section>
	);
};

export default Primary;
