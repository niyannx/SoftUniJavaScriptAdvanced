function solve(array) {
    return array.filter((a, i) => i % 2 !== 0)   // filter only the ones at odd INDEXES
        .map(x => x * 2)                         // double the values
        .reverse()                               // reverse the array
        .join(' ');
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));