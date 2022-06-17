function validate() {
    let emailField = document.getElementById('email');

    let validEmailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailField.addEventListener('change', onInput);

    function onInput() {
        // if the field's value matches the regex
        if (validEmailRegex.test(emailField.value)) {
            emailField.classList.remove('error');
        } else {
            emailField.classList.add('error');
        }
    }
}