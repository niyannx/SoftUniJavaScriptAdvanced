function logGCD(n1, n2) {
    let gcd = 0;

    for (let i = 1; i <= n1 && i <= n2; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            gcd = i;
        }
    }

    console.log(gcd);
}

logGCD(2154, 458);