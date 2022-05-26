function solve(library, orders) {
    const result = [];

    // loop through every order
    for (const order of orders) {
        // create new object
        const object = Object.assign({}, order.template);
    
        // loop through every part
        for (const part of order.parts) {
            // compose function from library into project
            object[part] = library[part];
        }
    
        // store object
        result.push(object);
    }

    return result;
}



const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const result = solve(library, orders);

console.log(result);