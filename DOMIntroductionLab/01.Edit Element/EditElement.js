function edit(element, match, replacer) {
    let text = element.textContent;

    const matcher = new RegExp(match, 'g');

    let result = text.replace(matcher, replacer);

    element.textContent = result;
}