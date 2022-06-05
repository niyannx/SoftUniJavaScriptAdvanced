function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(event) {
        const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        let email = event.target.value;

        if (emailRegex.test(email)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}