const render = (template, node) => {
	if (!node) return;

	node.innerHTML = template;
};

const renderHeading = data => {
	const element = document.querySelector("#header");

	const template = `<h1>${data.name}</h1><p>${data.title}</p>`;

	render(template, element);
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

const renderReferences = data => {
	let template = `<header class="article-header">
            <h2 class="article-heading">
                References
            </h2>
        </header>`;

	data.map(item => {
		template += `<section class="reference-item">
            <p class="reference-name">${item.name}</p>
            <p class="reference-info">${item.title}</p>
            <p class="reference-info">${item.phone}</p>
            <p class="reference-info">${item.email}</p>
        </section>`;
	});

	render(template, document.querySelector("#references"));
};

const renderAvatar = data => {
	const element = document.querySelector("#avatar");

	const template = `<img src="${
		data.avatar
	}" alt="Image of Jon Karlsen" />`;

	render(template, element);
};

const renderContactInfo = data => {
	const element = document.querySelector("#bio-contact");

	let template = `<h2>Contact</h2>`;

	Object.keys(data).forEach(item => {
		const heading = item.charAt(0).toUpperCase() + item.substr(1);
		const text = data[item];

		template += `<h5>${heading}</h5><p>${text}</p>`;
	});

	render(template, element);
};

const renderAboutMe = data => {
	const element = document.querySelector("#bio-about");

	let template = `<h2>About Me</h2><p>${data.aboutMe}</p>`;

	render(template, element);
};

// TODO: refactor render functions to find DOM element at the top of the function

renderHeading(biography);
renderEducation(education);
renderExperience(experience);
renderReferences(references);
renderAvatar(biography);
renderContactInfo(biography.contact);
renderAboutMe(biography);
