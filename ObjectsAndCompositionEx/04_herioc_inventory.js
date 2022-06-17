function solve(arr) {
    const result = [];

    for (const heroInfoString of arr) {
        const hero = {};

        const heroInfoArray = heroInfoString.split(' / ');

        hero.name = heroInfoArray[0];
        hero.level = Number(heroInfoArray[1]);
        hero.items = heroInfoArray[2] ? heroInfoArray[2].split(', ') : [];

        result.push(hero);
    }

    return JSON.stringify(result);
}

console.log(solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));