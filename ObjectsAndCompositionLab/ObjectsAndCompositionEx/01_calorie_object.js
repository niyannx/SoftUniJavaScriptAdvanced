function solve(arr) {
    const obj = {};

    for (const [i, v] of arr.entries()) {
        if (i % 2 === 0) {
            const name = v;
            const calories = Number(arr[i + 1]);

            obj[name] = calories;
        }
    }

    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);