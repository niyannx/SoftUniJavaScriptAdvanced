function toggle() {
    let button = document.querySelector('.button');
    let extraText = document.getElementById('extra');

    button.textContent = button.textContent == 'More' ? 'Less' : 'More';

    extraText.style.display = 
        extraText.style.display == 'none' ? 'block' : 'none';
}