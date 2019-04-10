import React from "react";

const References = props => {
	return (
		<section>
			<header className="article-header">
				<h2
					className="main-article-heading"
					id="references-heading">
					<i className="fas fa-pencil-alt main-article-heading-icon" />
					References
				</h2>
			</header>
			<div className="references-container" aria-hidden="true">
				{props.references.map(item => (
					<article className="reference-item" key={item.name}>
						<p className="reference-name">{item.name}</p>
						<p className="reference-info">{item.title}</p>
						<p className="reference-info">{item.phone}</p>
						<p className="reference-info">{item.email}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default References;
