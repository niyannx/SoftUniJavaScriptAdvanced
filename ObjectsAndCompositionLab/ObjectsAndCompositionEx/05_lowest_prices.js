function solve(arr) {
    const result = {};

    for (const infoString of arr) {
        const info = infoString.split(' | ');

        const currProduct = {
            town: info[0], 
            name: info[1], 
            price: Number(info[2])
        };

        const nameProduct = currProduct.name;

        if (result[nameProduct]) {
            // product already exists => compare prices, keep cheaper one

            if (currProduct.price < result[nameProduct].price) {
                result[nameProduct] = currProduct;
            }
        } else {
            // product doesnt exist => add it 

            result[nameProduct] = Object.assign({}, currProduct);
        }
    }

    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);