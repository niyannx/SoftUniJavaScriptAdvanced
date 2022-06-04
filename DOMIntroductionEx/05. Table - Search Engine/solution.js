function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let pattern = document.getElementById("searchField").value.toLowerCase();
      let allRows = Array.from(document.querySelectorAll("tbody tr"));

      for (const row of allRows) {
         let text = row.textContent.toLowerCase();

         if (text.includes(pattern)) {
            row.classList.add("select");
         } else {
            row.classList.remove("select");
         }
      }
   }
}