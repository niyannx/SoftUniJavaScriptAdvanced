function focused() {
    const html = {
        inputFields: Array.from(document.querySelectorAll('input'))
    };

    function onFocus(event) {
        event.target.parentElement.className = 'focused';
    }

    function onBlur(event) {
        event.target.parentElement.className = '';
    }

    html.inputFields.forEach(i => {
        i.addEventListener('focus', onFocus),
        i.addEventListener('blur', onBlur)
    });
}