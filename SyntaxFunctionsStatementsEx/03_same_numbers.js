function logOutput(num) {
    function areSameNumbers(num) {
        let numAsString = String(num);

        const set = new Set();

        for (let i = 0; i < numAsString.length; i++) {
            set.add(Number(numAsString[i]));
        }

        return set.size == 1;
    }

    function sumOfNumbers(num) {
        let numAsString = String(num);
        let sum = 0;

        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }

        return sum;
    }

    console.log(areSameNumbers(num));
    console.log(sumOfNumbers(num));
}

logOutput(2222);