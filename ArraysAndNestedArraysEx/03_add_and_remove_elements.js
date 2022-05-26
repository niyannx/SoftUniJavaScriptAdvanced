function solve(commands) {
    function logOutput(array) {
        if (array.length === 0) {
            console.log('Empty');
        } else {
            array.forEach(el => console.log(el));
        }
    }
    
    let array = [];

    let currNum = 1;

    commands.forEach(command => {
        if (command === 'add') {
            array.push(currNum);    // add number to end of array
        } else {
            array.pop();            // remove last entered number (from end of array)
        }

        currNum++;
    });

    logOutput(array);
}


solve(['add', 'add', 'remove', 'add', 'add']);
