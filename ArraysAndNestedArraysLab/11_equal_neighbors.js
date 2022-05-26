function solve(array) {
    let count = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            let element = array[row][col];

            if (element === array[row][col + 1]) {
                count++
            }

            if (row !== array.length - 1 && element === array[row + 1][col]) {
                count++
            }
        }
    }

    return count;
}

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));