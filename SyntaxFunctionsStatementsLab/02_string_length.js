function printInfo(str1, str2, str3) {
    let sumOfLength = str1.length + str2.length + str3.length;
    let averageLength = Math.floor(sumOfLength / 3);

    console.log(sumOfLength);
    console.log(averageLength);
}

printInfo('chocolate', 'ice cream', 'cake');
printInfo('pasta', '5', '22.3');