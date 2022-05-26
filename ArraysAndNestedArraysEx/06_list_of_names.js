function solve(array) {
    array.sort((a, b) => a.localeCompare(b));

    let count = 0;

    array.forEach(el => {
        count++;

        console.log(count + '.' + el);
    });
}

solve(['John', 'Bob', 'Christina', 'Ema']);