function solve(array) {
    array.sort((a, b) => a - b);

    let result = [];

    while (array.length !== 0) {
        let smaller = array.shift();
        let bigger = array.pop();

        result.push(smaller);
        result.push(bigger);
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
