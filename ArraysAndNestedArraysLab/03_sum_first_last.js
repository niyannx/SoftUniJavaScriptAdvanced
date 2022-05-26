function sumFirstAndLastEl(array) {
    let firstEl = Number(array.shift());
    let lastEl = Number(array.pop());

    return firstEl + lastEl;
}

console.log(sumFirstAndLastEl(['20', '30', '40']));