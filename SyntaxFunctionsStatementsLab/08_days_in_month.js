function getNumberOfDays(month, year) {
    let date = new Date(year, month, 0);

    return date.getDate();
}

console.log(getNumberOfDays(1, 2012));