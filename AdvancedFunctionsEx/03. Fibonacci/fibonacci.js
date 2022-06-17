function getFibonator() {
    let firstNum = 0;
    let secondNum = 0;

    return () => {
        let result = firstNum + secondNum || 1;

        firstNum = secondNum;
        secondNum = result;

        return result;
    }
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());