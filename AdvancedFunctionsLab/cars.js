function solve(data) {
    const result = {};

    const functions = {
        create: (name, inherits, parent) => {
            result[name] = inherits ? Object.create(result[parent]) : {}
        },

        set: (name, property, value) => {
            result[name][property] = value
        },
        
        print: name => {
            const output = [];

            for (const key in result[name]) {
                output.push(`${key}:${result[name][key]}`);
            }
            console.log(output.join(','));
        },
    }

    data.forEach(datum => {
        const [command, name, x, y] = datum.split(" ");

        functions[command](name, x, y);
    });
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);