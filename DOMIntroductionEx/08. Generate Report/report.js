function generateReport() {
    // get the column names and add them as keys to a map (values are the indexes of the columns)
    function getColumnNamesWithIndexMap(ths) {
        // create map object
        const map = {};
        
        // count = current column index
        let count = 0;

        // iterate through every th cell
        ths.forEach(th => {
            // get the checkbox to use the 'name' attribute later on
            let checkbox = th.getElementsByTagName("input")[0];

            // add to the map (key = checkbox name, count = column index)
            map[checkbox.getAttribute("name")] = count;

            // increment count (because its going to the next th cell)
            count++;
        });

        // return map
        return map;
    }

    // gets all the elements of a column corresponding to a certain index
    function getColumnElementsByIndexColumn(tableRows, indexColumn) {
        let columnElements = [];

        for (const row of tableRows) {
            let columnElement = row.children[indexColumn];
            columnElements.push(columnElement);
        }

        return columnElements;
    }

    // returns array of the names of the checked columns
    function getCheckedColumns(ths) {
        let arr = [];

        for (const th of ths) {
            const checkbox = th.getElementsByTagName("input")[0];
    
            if (checkbox.checked === true) {
                arr.push(checkbox.getAttribute("name"));
            }
        }

        return arr;
    }

    // all html elements used
    const html = {
        ths: document.querySelectorAll("thead th"),
        trs: document.querySelectorAll("tbody tr"),
        output: document.getElementById("output")
    };

    // object functioning as a hashmap
    const columnIndexes = getColumnNamesWithIndexMap(Array.from(html.ths));

    // MAIN ---------------------------------------------
    // get an array of the names of the checked columns
    const checkedColumnsArr = getCheckedColumns(Array.from(html.ths));

    // create an array for the result
    const resultArr = [];

    // get the number of rows (so we know how many objects to create)
    let numberOfRows = html.trs.length;

    // iterate through all rows
    for (let i = 0; i < numberOfRows; i++) {
        const object = {};
    
        // go through each checked columns name
        checkedColumnsArr.forEach(colName => {
            // get the index of the column using the hashmap
            let index = columnIndexes[colName];
    
            // get the cell corresponding to the column and row
            let currCell = getColumnElementsByIndexColumn(Array.from(html.trs), index)[i];

            // add the info that the cell contains to the object (the key is the columns name)
            if (currCell !== undefined) {
                object[colName] = currCell.innerHTML;
            }
        });

        // add the object to the result
        resultArr.push(object);
    }

    // convert array to JSON
    let stringResult = JSON.stringify(resultArr);

    // display result
    html.output.value = stringResult;
}