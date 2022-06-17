function add(num1) {
    let context = num1;

    console.log(context);

    function add2(num2) {
        context += num2;

        return add2;
    };

    add2.toString = function () {
        return context;
    };

    return add2;
}


add(1)(6)(-3);
