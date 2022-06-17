function solve() {
    const html = {
        taskName: document.getElementById('task'),
        description: document.getElementById('description'),
        dueDate: document.getElementById('date'),
        buttonAdd: document.getElementById('add'),
        
        divOpen: document.querySelectorAll('.wrapper section')[1].querySelectorAll('div')[1],
        divInProgress: document.querySelectorAll('.wrapper section')[2].querySelectorAll('div')[1],
        divComplete: document.querySelectorAll('.wrapper section')[3].querySelectorAll('div')[1],
    };

    document.addEventListener('click', whatever);

    function whatever(event) {
        event.preventDefault();

        if (event.target.tagName === 'BUTTON') {
            const className = event.target.className;

            switch (className) {
                case "": 
                    addToOpenSection();
                break;
                case "green":
                    addToInProgressSection(event);
                break;
                case "orange":
                    addToCompletedSection(event);
                break;
                case "red":
                    remove(event);
                break;
            }
            
        }
    }

    function remove(event) {
        let article = event.target.parentElement.parentElement;
        article.parentElement.removeChild(article);
    }

    function addToCompletedSection(event) {
        let article = event.target.parentElement.parentElement;
        let articleCopy = article.cloneNode(true);
        let buttonsDiv = articleCopy.querySelector('.flex');
        buttonsDiv.innerHTML = "";

        html.divComplete.appendChild(articleCopy);
        article.parentElement.removeChild(article);
    }

    function addToInProgressSection(event) {
        let article = event.target.parentElement.parentElement;
        let articleCopy = article.cloneNode(true);
        let buttonsDiv = articleCopy.querySelector('.flex');
        buttonsDiv.innerHTML = "<button class='red'>Delete</button><button class='orange'>Finish</button>";

        html.divInProgress.appendChild(articleCopy);
        article.parentElement.removeChild(article);
    }

    function addToOpenSection() {
        const taskName = html.taskName.value;
        const description = html.description.value;
        const dueDate = html.dueDate.value;

        // append everything to article
        const articleElement = document.createElement('article');

        articleElement.innerHTML += `<h3>${taskName}</h3>`;
        articleElement.innerHTML += `<p>Description: ${description}</p>`;
        articleElement.innerHTML += `<p>Due Date: ${dueDate}</p>`;
        articleElement.innerHTML += `<div class='flex'>
                                        <button class='green'>Start</button>
                                        <button class='red'>Delete</button>
                                    </div>`;


        // append article to openSection
        html.divOpen.appendChild(articleElement);

        // delete things from from
        html.taskName.value = "";
        html.description.value = "";
        html.dueDate.value = "";
    }
}