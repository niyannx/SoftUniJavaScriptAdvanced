function cook(num, ...operations) {
    function performOperation(operation, num) {
        let result = 0;
        
        switch (operation) {
            case 'chop':
                result = num / 2;
            break;
            case 'dice':
                result = Math.sqrt(num);
            break;
            case 'spice':
                result = num + 1;
            break;
            case 'bake':
                result = num * 3;
            break;
            case 'fillet':
                result = num - num * 0.2;
            break;
        }

        return result;
    }

    num = Number(num);

    for (let i = 0; i < operations.length; i++) {
        num = performOperation(operations[i], num);

        console.log(num);
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');