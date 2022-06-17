function solve(...args) {
    const inputs = Array.from(args);
    const count = new Map();

    inputs.forEach(arg => {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!count.has(type)) {
            count.set(type, 0);
        }
        count.set(type, count.get(type) + 1);
    });

    Array.from(count.entries()).sort((a, b) => b[1] - a[1]).forEach(arg => console.log(`${arg[0]} = ${arg[1]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });