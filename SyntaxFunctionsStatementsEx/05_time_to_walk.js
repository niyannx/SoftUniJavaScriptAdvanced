function calculateTimeOfWalk(steps, lengthOfStep, speedKMH) {
    let distance = steps * lengthOfStep;
    let SPEED = speedKMH * 1000 / 3600;

    let breakTime = Math.floor(distance / 500) * 60;
    let time = (distance / SPEED) + breakTime;

    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

calculateTimeOfWalk(4000, 0.6, 5);