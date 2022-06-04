function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = /\([\d\w\s]+\)/g;

    let match = pattern.exec(text);
    
    let result = [];

    while (match) {
        result.push(match[0]);
        match = pattern.exec(text);
    }

    return result.join('; ');
}