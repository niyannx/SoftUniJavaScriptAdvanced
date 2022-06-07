function createFormatter(seperator, symbol, symbolFirst, formatter) {
    function format(num) {
        return formatter(seperator, symbol, symbolFirst, num);
    }

    return format;
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    
    result += value.toFixed(2).substr(-2,2);
    
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }  
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));