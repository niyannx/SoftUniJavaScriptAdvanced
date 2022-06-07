function solve(i) {
    function increment(n) {
        return i + n;
    }

    return increment;
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));