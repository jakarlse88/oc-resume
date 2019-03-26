const render = (template, node) => {
	if (!node) return;

	node.innerHTML = template;
};

const renderEducation = data => {
	let template = `<header class="article-header">
            <h2 class="article-heading">
                Education
            </h2>
        </header>`;

	data.map(item => {
		template += `
            <section class="article-body">
                <div class="sub-article">
                    <h4 class="body-subheading">
                        ${item.institution}
                    </h4>
                    <p class="body-subheading-subtitle">
                        ${item.subheading}
                    </p>
                    <p class="body-text">
                        ${item.bodyText}
                    </p>
                    <div class="article-date">
                        <p>${item.articleDate.date}</p>
                        <p>${item.articleDate.place}</p>
                    </div>
                </div>
            </section>
    `;
	});

	// Render result
	render(template, document.querySelector("#education"));
};

const renderExperience = data => {
	let template = `<header class="article-header">
            <h2 class="article-heading">
                Experience
            </h2>
        </header>`;

	data.map(item => {
		template += `
            <section class="article-body">
                <div class="sub-article">
                    <h4 class="body-subheading">
                        ${item.institution}
                    </h4>
                    <p class="body-subheading-subtitle">
                        ${item.subheading}
                    </p>
                    <p class="body-text">
                        ${item.bodyText}
                    </p>
                    <div class="article-date">
                        <p>${item.articleDate.date}</p>
                        <p>${item.articleDate.place}</p>
                    </div>
                </div>
            </section>
    `;
	});

	// Render result
	render(template, document.querySelector("#experience"));
};

renderEducation(education);
renderExperience(experience);
