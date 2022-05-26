function solve(matrix) {
    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;

    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    matrix.forEach(array => {
        sumDiagonal1 += array[firstIndex++];
        sumDiagonal2 += array[secondIndex--];
    });

    console.log(sumDiagonal1 + ' ' + sumDiagonal2);
}

solve([
    [20, 40],
    [10, 60]
]);