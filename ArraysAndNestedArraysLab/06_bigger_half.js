function logBiggerHalf(arr) {
    arr.sort((a, b) => a - b);

    arr.splice(0, Math.floor(arr.length / 2));

    return arr;
}

console.log(logBiggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log(logBiggerHalf([4, 7, 2, 5]));