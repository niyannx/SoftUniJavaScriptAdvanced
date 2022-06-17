function solve(table) {
    const result = [];

    for (let i = 1; i < table.length; i++) {
        const currTownInfo = table[i].split(/\s*\|\s*/g);

        const townName = currTownInfo[1];
        const latitude = Number(currTownInfo[2]).toFixed(2);
        const longitude = Number(currTownInfo[3]).toFixed(2);

        const currTown = {};
        
        currTown.Town = townName;
        currTown.Latitude = Number(latitude);
        currTown.Longitude = Number(longitude);

        result.push(currTown);
    }

    console.log(JSON.stringify(result));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);