function solve(worker) {
    if (worker.dizziness) {
        let waterIntake = 0.1 * worker.weight * worker.experience;

        worker.levelOfHydrated = worker.levelOfHydrated + waterIntake;
        worker.dizziness = false;
    }

    return worker;
}

console.log(solve({ 
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true 
}));

console.log(solve({ 
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));