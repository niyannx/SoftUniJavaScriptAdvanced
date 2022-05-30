function solve(arr) {
    arr.sort();

    let currLetter = '';

    for (const product of arr) {
        let name = product.split(' : ')[0];
        let price = product.split(' : ')[1];

        if (name.charAt(0) !== currLetter) {
            currLetter = name.charAt(0);

            console.log(currLetter);
        }

        console.log(`  ${name}: ${price}`);
    }
}

solve([
    'Appricot : 20.4', 
    'Fridge : 1500', 
    'TV : 1499', 
    'Deodorant : 10', 
    'Boiler : 300', 
    'Apple : 1.25', 
    'Anti-Bug Spray : 15', 
    'T-Shirt : 10'
]);