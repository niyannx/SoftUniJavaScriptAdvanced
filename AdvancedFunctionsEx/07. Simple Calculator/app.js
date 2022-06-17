function calculator() {
    const html = {
        num1: '',
        num2: '',
        result: ''
    };

    return {
        init: function(selector1, selector2, resultSelector) {
            html.num1 = document.querySelector(selector1);
            html.num2 = document.querySelector(selector2);

            html.result = document.querySelector(resultSelector);
        },
        
        add: function() {
            html.result.value = Number(html.num1.value) + Number(html.num2.value);
        },

        subtract: function() {
            html.result.value = Number(html.num1.value) - Number(html.num2.value);
        }
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');