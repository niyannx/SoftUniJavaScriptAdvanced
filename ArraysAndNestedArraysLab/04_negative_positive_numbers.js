function solve(array) {
    function printArray(arr) {
        for (let elem of arr) {
            console.log(elem);
        }
    }

    let newArray = [];

    for (let elem of array) {
        if (elem >= 0) {
            newArray.push(elem);
        } else {
            newArray.unshift(elem);
        }
    }

    printArray(newArray);
}

solve([7, -2, 8, 9, -4]);