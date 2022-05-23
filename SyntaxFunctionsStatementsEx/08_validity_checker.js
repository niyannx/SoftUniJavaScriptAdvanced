function validityChecker(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        function checkValidity(distance) {
            if (Number.isInteger(distance)) {
                return 'valid';
            } else {
                return 'invalid';
            }
        }

        distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

        let state = checkValidity(distance);

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${state}`);
    }

    calculateDistance(x1, y1, 0, 0);
    calculateDistance(x2, y2, 0, 0);
    calculateDistance(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);