function solve() {
   const html = {
      buttons: Array.from(document.querySelectorAll('.product-add .add-product')),
      output: document.querySelector('textarea'),
      checkout: document.querySelector('.checkout')
   };

   html.buttons.forEach(button => button.addEventListener('click', addProductToCart));
   html.checkout.addEventListener('click', logOutput);

   let boughtProducts = new Set();
   let finalPrice = 0;

   function addProductToCart(event) {
      const buttonClicked = event.target;

      const name = buttonClicked.parentElement.parentElement.querySelector('.product-details .product-title').textContent;
      const price = Number(buttonClicked.parentElement.parentElement.querySelector('.product-line-price').textContent);

      boughtProducts.add(name);
      finalPrice += price;

      html.output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   }

   function logOutput() {
      html.output.textContent += `You bought ${Array.from(boughtProducts).join(', ')} for ${finalPrice.toFixed(2)}.`;

      html.buttons.forEach(button => button.disabled = true);
      html.checkout.disabled = true;
   }
}