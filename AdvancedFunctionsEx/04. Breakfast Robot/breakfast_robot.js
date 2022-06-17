function solve() {
    // recipes
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
    
        lemonade: {
            carbohydrate:10,
            flavour: 20
        },
    
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
    
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
    
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    // supply
    const supply = {
        protein: 0,
        carbohydrate: 0,
        flavour: 0,
        fat: 0
    };

    const instructions = {
        restock: function(commands) {
            let microelement = commands[1];
            let quantity = Number(commands[2]);

            supply[microelement] = supply[microelement] + quantity;

            return "Success"; 
        },

        prepare: function(commands) {
            let recipe = commands[1];
            let quantity = Number(commands[2]);

            // get the wanted product
            product = recipes[recipe];

            // check if recipe can be made
            for (let i = 0; i < quantity; i++) {

                // get the keys and values of the products needed
                for (const [key, value] of Object.entries(product)) {
                    // if the supply of (element) is less than the needed, print error
                    if (supply[key] < value) {
                        return `Error: not enough ${key} in stock`;
                    }
                }
            }

            // make product
            for (let i = 0; i < quantity; i++) {
                for (const [key, value] of Object.entries(product)) {
                    supply[key] = supply[key] - value;
                }
            }

            return "Success";
        },

        report: function(commands) {
            return `protein=${supply.protein} carbohydrate=${supply.carbohydrate} fat=${supply.fat} flavour=${supply.flavour}`;
        }
    };

    return (commandsStr) => {
        let commands = commandsStr.split(' ');

        return instructions[commands[0]](commands);
    }
}

let manager = solve();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));

