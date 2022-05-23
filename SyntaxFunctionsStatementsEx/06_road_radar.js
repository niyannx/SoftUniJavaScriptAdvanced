function logWithinAllowedSpeed(speed, zone) {
    function getStatus(difference) {
        let status = '';
        
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        return status;
    }

    const ZONES_AND_LIMITS = new Map([
        ['motorway', 130],
        ['interstate', 90],
        ['city', 50],
        ['residential', 20]
    ]);

    let speedLimit = ZONES_AND_LIMITS.get(zone);

    if (speed > speedLimit) {
        let difference = Math.abs(speed - speedLimit);

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${getStatus(difference)}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}

logWithinAllowedSpeed(120, 'interstate');