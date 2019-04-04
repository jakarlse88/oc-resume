import React, { Component } from "react";
import data from "../../data";
import Avatar from "./Avatar";
import ContactInfo from "./ContactInfo";
import BioInfo from "./BioInfo";
import HobbyInfo from "./HobbyInfo";

class SideBar extends Component {
	render() {
		const { biography } = data;

		return (
			<section className="sidebar">
				<Avatar imgUrl={biography.avatar} />
				<ContactInfo contactInfo={biography.contact} />
				<BioInfo aboutMe={biography.aboutMe} />
				<HobbyInfo hobbies={biography.hobbies} />
			</section>
		);
	}
}

export default SideBar;
