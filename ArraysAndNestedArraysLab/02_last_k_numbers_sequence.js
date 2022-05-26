function solve(n, k) {
    let result = [];

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            result[0] = 1;

            continue;
        }
        
        let sum = 0;

        for (let j = 1; j <= k; j++) {
            if (result[i - j] == undefined) {
                continue;
            }

            sum += result[i - j];
        }

        result[i] = sum;
    }

    return result;
}

solve(6, 3);
solve(8, 2);