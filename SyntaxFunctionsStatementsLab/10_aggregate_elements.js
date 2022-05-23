function aggregate(array) {
    function sum(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

    function inverseSum() {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += 1 / array[i];
        }

        return sum;
    }

    function concat(array) {
        let result = '';

        for (let i = 0; i < array.length; i++) {
            result += String(array[i]);
        }

        return result;
    }

    console.log(sum(array));
    console.log(inverseSum(array));
    console.log(concat(array));
}

aggregate([1, 2, 3]);