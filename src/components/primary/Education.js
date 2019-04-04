import React from "react";

const Education = props => {
	return (
		<div>
			<article>
				<header className="article-header">
					<h2 className="main-article-heading">
						<i className="fas fa-graduation-cap main-article-heading-icon" />
						Education
					</h2>
				</header>
				{props.education.map((item, index) => (
					<article className="article">
						<div aria-hidden="true" className="article-icon">
							{index === 0 ? (
								<i className="far fa-dot-circle" />
							) : (
								<i className="fas fa-circle" />
							)}
						</div>
						<div className="article-date" aria-hidden="true">
							<p>{item.articleDate.date}</p>
							<p>{item.articleDate.place}</p>
						</div>
						<div className="article-body">
							<h4 className="article-body-subheading">
								{item.institution}
							</h4>
							<p className="article-body-subtitle">
								{item.subheading}
							</p>
							<p className="article-body-text">
								{item.bodyText}
							</p>
						</div>
					</article>
				))}
			</article>
		</div>
	);
};

export default Education;
