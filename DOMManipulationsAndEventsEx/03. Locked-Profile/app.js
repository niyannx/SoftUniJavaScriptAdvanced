function lockedProfile() {
    const html = {
        additionalInfoButton: Array.from(document.querySelectorAll('.profile button'))
    };

    html.additionalInfoButton.forEach(button => button.addEventListener('click', onShowMore));

    function onShowMore(event) {
        const buttonClicked = event.target;
        const profile = buttonClicked.parentElement;
        const additionalInfo = profile.querySelector('div');
        
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            if (buttonClicked.textContent == 'Show more') {
                additionalInfo.style.display = 'block';
                buttonClicked.textContent = 'Hide it';
            } else {
                additionalInfo.style.display = '';
                buttonClicked.textContent = 'Show more';
            }
        }
    }
}