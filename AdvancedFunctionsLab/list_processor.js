function solve(data) {
    let result = [];

    const functions = {
        add: value => result.push(value),
        remove: value => (result = result.filter(el => el !== value)),
        print: () => console.log(result.join(','))
    };

    for (const datum of data) {
        let [command, value] = datum.split(' ');

        functions[command](value);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);