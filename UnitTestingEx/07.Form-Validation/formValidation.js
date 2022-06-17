function validate() {
    const companyCheckbox = document.getElementById('company');
    const submitButton = document.getElementById('submit');

    companyCheckbox.addEventListener('change', (event) => {
        const companyInfoFieldset = document.getElementById('companyInfo');

        if (event.target.checked) {
            companyInfoFieldset.style.display = '';
        } else {
            companyInfoFieldset.style.display = 'none';
        }
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const out = [];

        const regex = {
            usernameRegex: /^[A-Za-z0-9]{3,20}$/,
            passRegex: /^[A-Za-z0-9_]{5,15}$/,
            emailRegex: /^[^]*@[^]*\.[^]*$/
        };

        const html = {
            usernameField: document.getElementById('username'),
            emailField: document.getElementById('email'),
            passField: document.getElementById('password'),
            confirmPassField: document.getElementById('confirm-password'),
            validDiv: document.getElementById('valid'),
            companyNumberField: document.getElementById('companyNumber')
        };

        let isValidUsername = regex.usernameRegex.test(html.usernameField.value);
        let isValidEmail = regex.emailRegex.test(html.emailField.value);
        let isValidPass = regex.passRegex.test(html.passField.value);
        let isConfirmedPass = regex.passRegex.test(html.confirmPassField.value) && html.passField.value === html.confirmPassField.value;

        if (!isValidUsername) {
            html.usernameField.style.borderColor = 'red';
            out.push(false);
        } else {
            html.usernameField.style.border = 'none';
            out.push(true);
        }

        if (!isValidEmail) {
            html.emailField.style.borderColor = 'red';
            out.push(false);
        } else {
            html.emailField.style.border = 'none';
            out.push(true);
        }

        if (!isValidPass) {
            html.passField.style.borderColor = 'red';
            out.push(false);
        } else {
            html.passField.style.border = 'none';
            out.push(true);
        }

        if (!isConfirmedPass) {
            html.confirmPassField.style.borderColor = 'red';
            out.push(false);
        } else {
            html.confirmPassField.style.border = 'none';
            out.push(true);
        }

        if (document.getElementById('company').checked) {
            const companyNumber = html.companyNumberField.value;

            const isValidNumber = companyNumber >= 1000 && companyNumber <= 9999;

            if (!isValidNumber) {
                html.companyNumberField.style.borderColor = 'red';
                out.push(false);
            } else {
                html.companyNumberField.style.border = 'none';
                out.push(true);
            }
        }

        if (out.includes(false)) {
            html.validDiv.style.display = 'none';
        } else {
            html.validDiv.style.display = 'block';
        }
    });
}