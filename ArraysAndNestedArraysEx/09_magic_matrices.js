function solve(matrix) {
    let sumsRowsCols = new Set();

    // check rows
    for (let row = 0; row < matrix.length; row++) {
        let sumOfRow = 0;

        for (let col = 0; col < matrix[row].length; col++) {
            sumOfRow += matrix[row][col];
        }

        sumsRowsCols.add(sumOfRow);
    }

    // check cols 
    for (let col = 0; col < matrix[0].length; col++) {
        let sumOfCol = 0;

        for (let row = 0; row < matrix.length; row++) {
            sumOfCol += matrix[row][col];
        }

        sumsRowsCols.add(sumOfCol);
    }

    if (sumsRowsCols.size == 1) {
        return true;
    } else {
        return false;
    }
}

console.log(solve([
    [4, 5, 6], 
    [6, 5, 4], 
    [5, 5, 5]
]));

console.log(solve([
    [11, 32, 45], 
    [21, 0, 1], 
    [21, 1, 1]
]));