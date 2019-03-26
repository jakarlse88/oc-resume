const render = (template, node) => {
	if (!node) return;

	node.innerHTML = template;
};

const infoArticleTemplate = `<article class="info-article">
<header class="article-header">
    <h2 class="article-heading">
        Education
    </h2>
</header>

<section class="article-body">
    <div class="sub-article">
        <h4 class="body-subheading">
            OpenClassrooms
        </h4>
        <p class="body-subheading-subtitle">
            Back-End Web Developer: .NET
        </p>
        <p class="body-text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Culpa ipsam eveniet
            aspernatur quae sed cumque minus unde, tempora
            minima voluptatem.
        </p>
        <div class="article-date">
            <p>2019-2020</p>
            <p>Oslo, Norway</p>
        </div>
    </div>
    <div class="sub-article">
        <h4 class="body-subheading">
            OpenClassrooms
        </h4>
        <p class="body-subheading-subtitle">
            Back-End Web Developer: .NET
        </p>
        <p class="body-text">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Culpa ipsam eveniet
            aspernatur quae sed cumque minus unde, tempora
            minima voluptatem.
        </p>
        <div class="article-date">
            <p>2019-2020</p>
            <p>Oslo, Norway</p>
        </div>
    </div>
</section>
</article>`;

render(infoArticleTemplate, document.querySelector("#root"));
