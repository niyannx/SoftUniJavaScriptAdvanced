function getCorrespondingDayOfWeek(input) {
    let daysOfWeekMap = new Map([
        ['Monday', 1],
        ['Tuesday', 2],
        ['Wednesday', 3],
        ['Thursday', 4],
        ['Friday', 5],
        ['Saturday', 6],
        ['Sunday', 7]
    ]);

    if (daysOfWeekMap.has(input)) {
        return daysOfWeekMap.get(input);
    } else {
        return 'error';
    }
}

console.log(getCorrespondingDayOfWeek('Tuesday'));