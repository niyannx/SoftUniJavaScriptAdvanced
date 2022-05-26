function solve(array) {
    array.sort(function(a, b) {
        if (a.length - b.length === 0) {
            return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
        } else {
            return a.length - b.length;
        }
    });

    console.log(array.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);