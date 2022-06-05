function deleteByEmail() {
    // establish the html elements used
    const html = {
        emailField: document.querySelector("input[name='email']"),
        customerRows: document.querySelectorAll("tbody tr"),
        result: document.getElementById("result")
    };

    // get the email from input
    let emailToDelete = html.emailField.value;
    // get the rows of customers
    let rows = Array.from(html.customerRows);

    let found = false;

    // loop through each customer
    for (const row of rows) {
        // get their email cells
        let cell = row.children[1];
        
        // if the email cell's text content equals the one that's searched
        if (cell.textContent == emailToDelete) {
            found = true;

            // delete the row
            row.parentElement.removeChild(row);
            break;
        }
    }

    // log output
    if (!found) {
        html.result.textContent = "Not found.";
    } else {
        html.result.textContent = "Deleted.";
    }

    html.emailField.value = "";
}