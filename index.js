const _render = (template, node) => {
	if (!node) return;

	node.innerHTML = template;
};

const _renderHeading = data => {
	const element = document.querySelector("#header");

	const template = `<h1 class="main-heading">
    <span class="heading-first-name">${data.firstName}</span>
    <span class="heading-last-name">${data.lastName}</span>
    </h1><p class="main-heading-subtitle">${data.title}</p>`;

	_render(template, element);
};

const _renderEducation = data => {
	const element = document.querySelector("#education");

	let template = `<header class="article-header">
    
            <h2 class="main-article-heading">
            <i class="fas fa-graduation-cap main-article-heading-icon"></i>    
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

	_render(template, element);
};

const _renderExperience = data => {
	const element = document.querySelector("#experience");

	let template = `<header class="article-header">
            <h2 class="main-article-heading">
            <i class="fas fa-briefcase main-article-heading-icon"></i>
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

	_render(template, element);
};

const _renderReferences = data => {
	const element = document.querySelector("#references");

	let template = `<header class="article-header">
            <h2 class="main-article-heading" id="references-heading">
                <i class="fas fa-pencil-alt main-article-heading-icon"></i>    
                References
            </h2>
        </header>
        <div class="references-container" aria-hidden="true">
        `;

	data.map(item => {
		template += `<article class="reference-item">
            <p class="reference-name">${item.name}</p>
            <p class="reference-info">${item.title}</p>
            <p class="reference-info">${item.phone}</p>
            <p class="reference-info">${item.email}</p>
        </article>`;
	});

	template += "</div>";

	_render(template, element);
};

const _renderAvatar = data => {
	const element = document.querySelector("#avatar-container");

	const template = `<img src="${
		data.avatar
	}" alt="Image of Jon Karlsen" class="avatar" />`;

	_render(template, element);
};

const _renderContactInfo = data => {
	const element = document.querySelector("#bio-contact");

	let template = `<h2 class="sidebar-heading">Contact</h2>`;

	template += `<div aria-hidden="true" class="bio-contact-container">`;

	Object.keys(data).forEach(item => {
		const heading = item.charAt(0).toUpperCase() + item.substr(1);
		const text = data[item];

		template += `<h5 class="contact-subheading">${heading}</h5><p class="contact-paragraph">${text}</p>`;
	});

	template += `</div>`;

	_render(template, element);
};

const _renderAboutMe = data => {
	const element = document.querySelector("#bio-about");

	let template = `<h2 class="sidebar-heading">About Me</h2>`;

	template += `<div aria-hidden="true" class="bio-about-container"><p>${
		data.aboutMe
	}</p></div>`;

	_render(template, element);
};

const renderContents = (function(data) {
	const { biography, education, experience, references } = data;

	_renderHeading(biography);
	_renderEducation(education);
	_renderExperience(experience);
	_renderReferences(references);
	_renderAvatar(biography);
	_renderContactInfo(biography.contact);
	_renderAboutMe(biography);
})(data);
