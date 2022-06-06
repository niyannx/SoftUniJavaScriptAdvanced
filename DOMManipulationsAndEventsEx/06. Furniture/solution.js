function solve() {
  const html = {
    inputField: document.getElementsByTagName('textarea')[0],
    outputField: document.getElementsByTagName('textarea')[1],
    generateButton: document.getElementsByTagName('button')[0],
    buyButton: document.getElementsByTagName('button')[1],
    tableBody:  document.querySelector('.table tbody')
  };

  html.buyButton.addEventListener('click', onBuy);
  html.generateButton.addEventListener('click', onGenerate);
  
  function onGenerate() {
    const furnitureArr = JSON.parse(html.inputField.value);

    for (const product of furnitureArr) {
      // create new table row
      let trElement = document.createElement('tr');

      // create new cells
      let photoCell = document.createElement('td');
      let nameCell = document.createElement('td');
      let priceCell = document.createElement('td');
      let decFactorCell = document.createElement('td');
      let markCell = document.createElement('td');

      // create img tag
      let img = document.createElement('img');
      img.src = product.img;

      // create checkbox
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      // add properties to individual cells
      photoCell.appendChild(img);
      nameCell.textContent = product.name;
      priceCell.textContent = product.price;
      decFactorCell.textContent = product.decFactor;
      markCell.appendChild(checkbox);

      // add cells to row
      trElement.appendChild(photoCell);
      trElement.appendChild(nameCell);
      trElement.appendChild(priceCell);
      trElement.appendChild(decFactorCell);
      trElement.appendChild(markCell);

      // append row to table
      html.tableBody.appendChild(trElement);
    }
  }

  function onBuy(event) {
    let checkedCheckboxes = Array.from(document.querySelectorAll('input:checked'));

    let boughtFurniture = [];
    let totalPrice = 0;
    let averageDecFactor = 0;

    for (const checkbox of checkedCheckboxes) {
      const row = checkbox.parentNode.parentNode;

      const name = row.children[1].textContent;
      const price = Number(row.children[2].textContent);
      const decFactor = Number(row.children[3].textContent);

      boughtFurniture.push(name);
      totalPrice += price;
      averageDecFactor += decFactor;
    }

    averageDecFactor = averageDecFactor / boughtFurniture.length;

    html.outputField.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    html.outputField.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    html.outputField.value += `Average decoration factor: ${averageDecFactor}`;
  }
}
