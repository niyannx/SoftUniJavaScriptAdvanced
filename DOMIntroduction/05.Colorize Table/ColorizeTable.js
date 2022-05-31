function colorize() {
    const table = document.getElementsByTagName("table")[0];
    const allRows = Array.from(table.getElementsByTagName("tr"));

    allRows.shift();

    for (let i = 0; i < allRows.length; i++) {
        if (i % 2 === 0) {
            allRows[i].style.backgroundColor = "teal";
        }
    }
}