function solve(matrix) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < matrix.length; i++) { // rows
        for (let j = 0; j < matrix[i].length; j++) { // cols
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }

    return max;
}

console.log(solve(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]));