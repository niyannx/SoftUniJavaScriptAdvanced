function addItem() {
    const html = {
        textField: document.getElementById('newItemText'),
        valueField: document.getElementById('newItemValue'),
        menu: document.getElementById('menu')
    };
    
    // read input
    const text = html.textField.value;
    const value = html.valueField.value;

    // create new option element
    let newOptionEl = document.createElement('option');

    // add properties to the option element
    newOptionEl.textContent = text;
    newOptionEl.value = value;

    // append the option to the menu
    html.menu.appendChild(newOptionEl);

    // clear text fields
    html.textField.value = '';
    html.valueField.value = '';
}