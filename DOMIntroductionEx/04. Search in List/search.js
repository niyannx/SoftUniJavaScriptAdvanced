function search() {
   const allPointsOfList = Array.from(document.querySelectorAll('ul li'));
   const pattern = document.getElementById('searchText').value;

   let matchesFound = 0;

   for (const point of allPointsOfList) {
      point.style.fontWeight = 'normal';
      point.style.textDecoration = '';

      document.getElementById('result').textContent = '';

      let town = point.innerHTML;

      if (town.includes(pattern) && pattern !== '') {
         matchesFound++;

         point.style.fontWeight = 'bold';
         point.style.textDecoration = 'underline';
      }
   }

   document.getElementById('result').textContent = `${matchesFound} matches found`;
}
