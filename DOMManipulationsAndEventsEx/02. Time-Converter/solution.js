function attachEventsListeners() {
    const html = {
        buttons: Array.from(document.querySelectorAll('input[type="button"]')),
        fieldDays: document.getElementById('days'),
        fieldHours: document.getElementById('hours'),
        fieldMinutes: document.getElementById('minutes'),
        fieldSeconds: document.getElementById('seconds')
    };

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unit) {
        const days = value / ratios[unit];

        return {
            days: days,
            hours: days * ratios.hours,
            minutes: days * ratios.minutes,
            seconds: days * ratios.seconds
        };
    }

    html.buttons.forEach(button => button.addEventListener('click', onConvert));
    
    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');

        let value = input.value;
        let unit = input.id;

        const time = convert(value, unit);

        html.fieldDays.value = time.days;
        html.fieldHours.value = time.hours;
        html.fieldMinutes.value = time.minutes;
        html.fieldSeconds.value = time.seconds;
    }
}