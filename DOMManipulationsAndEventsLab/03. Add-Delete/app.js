function addItem() {
    const html = {
        input: document.getElementById("newItemText"),
        list: document.getElementById("items")
    };

    function addElement() {
        let newItem = html.input.value;
        
        // create the new elements - the new entry and the button for deletion
        let liElement = document.createElement("li");
        let deleteLink = document.createElement("a");

        // set link attributes
        deleteLink.textContent = "[Delete]";
        deleteLink.href = "#";
        deleteLink.addEventListener("click", onDelete);

        // set new entry attributes
        liElement.textContent = newItem;
        liElement.appendChild(deleteLink);

        // add the new entry to the list
        html.list.appendChild(liElement);

        // clear the text field
        html.input.value = "";        
    }

    function onDelete(event) {
        event.target.parentElement.remove();
    }

    addElement();
}