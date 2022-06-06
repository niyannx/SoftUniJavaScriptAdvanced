function create(arr) {
   const container = document.querySelector('#content');

   arr.forEach(el => {
      // create section
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      // set paragraph properties
      pElement.textContent = el;
      pElement.style.display = 'none';

      // add the text to the section
      divElement.appendChild(pElement);

      // add aevent listener
      divElement.addEventListener('click', displayText);

      // add the section to the page
      container.appendChild(divElement);
   });

   function displayText(event) {
      let div = event.target;

      div.querySelector('p').style.display = 'inline';
   }
}