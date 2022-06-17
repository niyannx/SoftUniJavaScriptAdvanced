function getArticleGenerator(articles) {
    const html = {
        container: document.getElementById('content')
    };
    
    return function showNext() {
        // if there is a next element to display
        if (articles[0]) {
            let article = document.createElement('article');
            article.textContent = articles[0];

            // remove the displayed article
            articles.shift();

            html.container.appendChild(article);
        }

        return showNext;
    }
}
