function printEvenIndexes(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            result[result.length] = array[i];
        }
    }

    console.log(result.join(' '));
}

printEvenIndexes([1, 2, 3, 4, 5]);