function solve(carRequirements) {
    // requirements as variables
    let requiredModel = carRequirements.model;
    let requiredPower = carRequirements.power;
    let requiredColor = carRequirements.color;
    let requiredCarriage = carRequirements.carriage;
    let requiredWheelsize = (carRequirements.wheelsize % 2 === 0) ? (carRequirements.wheelsize - 1) : carRequirements.wheelsize;

    // libraries
    const engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}
    ];

    const carriages = [
        {type: 'hatchback', color: requiredColor},
        {type: 'coupe', color: requiredColor}
    ];

    function getRequiredEngine() {
        for (const engine of engines) {
            if (requiredPower <= engine.power) {
                return engine;
            }
        }
    }

    function getRequiredCarriage() {
        for (const carriage of carriages) {
            if (carriage.type == requiredCarriage) {
                return carriage;
            }
        }
    }

    // create object fitting requirements
    const car = {};

    car.model = requiredModel;
    car.engine = getRequiredEngine();
    car.carriage = getRequiredCarriage();
    car.wheels = [0, 0, 0, 0].fill(requiredWheelsize);

    return car;
}

console.log(solve({ 
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 
}));