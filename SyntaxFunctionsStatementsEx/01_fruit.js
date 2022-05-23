function calculatePrice(fruit, grams, pricePerKG) {
    let weight = grams / 1000;

    let money = weight * pricePerKG;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

calculatePrice('orange', 2500, 1.8);