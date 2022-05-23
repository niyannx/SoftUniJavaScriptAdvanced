function getPreviousDaysDate(year, month, day) {
    const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
    let previousDayYear, previousDayMonth, previousDay;

    const PREVIOUS_DATE = new Date(new Date(year, month, day).getTime() - MILLISECONDS_IN_DAY);

    previousDayYear = PREVIOUS_DATE.getFullYear();
    previousDayMonth = PREVIOUS_DATE.getMonth();
    previousDay = PREVIOUS_DATE.getDate();

    console.log(`${previousDayYear}-${previousDayMonth}-${previousDay}`);
}

getPreviousDaysDate(2016, 10, 1);