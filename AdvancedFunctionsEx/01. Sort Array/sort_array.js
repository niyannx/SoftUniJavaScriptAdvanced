function sort(arr, style) {
    if (style === 'asc') {
        arr.sort((a, b) => a - b);
    } else if (style === 'desc') {
        arr.sort((a, b) => b - a);
    }

    return arr;
}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');