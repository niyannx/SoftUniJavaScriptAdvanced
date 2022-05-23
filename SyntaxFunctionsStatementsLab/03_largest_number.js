function printLargest(num1, num2, num3) {
    let largest;

    // if num1 is greater than num2, then next we compare num1 and num3 
    // if num1 is lesser than num2, then we compare num2 and num3
    largest = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);

    console.log(`The largest number is ${largest}.`);
}

printLargest(3, 5, 1);