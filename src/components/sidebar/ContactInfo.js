import React from "react";

const ContactItem = props => (
	<div aria-hidden={true}>
		<h5 className="contact-subheading">{props.heading}</h5>
		<p className="contact-paragraph">{props.text}</p>
	</div>
);

const ContactInfo = props => {
	const contactItemList = [];

	Object.keys(props.contactInfo).forEach(item => {
		const heading = item.charAt(0).toUpperCase() + item.substr(1);
		const text = props.contactInfo[item];

		contactItemList.push({ heading, text });
	});

	return (
		<div className="bio-info" aria-hidden="true">
			<h2 className="sidebar-heading">Contact</h2>
			<div aria-hidden="true" className="bio-contact-container">
				{contactItemList.map(item => (
					<ContactItem
						heading={item.heading}
						text={item.text}
						key={item.heading}
					/>
				))}
			</div>
		</div>
	);
};

export default ContactInfo;
