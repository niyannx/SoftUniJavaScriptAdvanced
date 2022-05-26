function solve(arrayInput) {
    const towns = {};

    for (let element of arrayInput) {
        let input = element.split(' <-> ');

        let townName = input[0];
        let townPopulation = Number(input[1]);

        if (towns[townName] != undefined) {
            townPopulation += towns[townName];
        }

        towns[townName] = townPopulation;
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

solve(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);