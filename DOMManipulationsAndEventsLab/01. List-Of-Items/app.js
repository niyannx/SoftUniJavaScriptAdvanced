function addItem() {
    const list = document.getElementById("items");
    const textField = document.getElementById("newItemText");

    const liElement = document.createElement("li");
    liElement.textContent = textField.value;

    list.appendChild(liElement);

    textField.value = "";
}