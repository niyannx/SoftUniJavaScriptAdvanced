function logSectionOfPies(array, start, end) {
    let startIndex = array.indexOf(start);
    let endIndex = array.indexOf(end) + 1;

     return array.slice(startIndex, endIndex);
}

console.log(logSectionOfPies(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
 'Key Lime Pie', 'Lemon Meringue Pie'));