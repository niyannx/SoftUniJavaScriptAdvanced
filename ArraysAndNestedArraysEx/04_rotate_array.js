function solve(array, count) {
    for (let i = 0; i < count; i++) {
        array.unshift(array.pop());      // add removed element from last to first index
    }

    console.log(array.join(' '));
}

solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);