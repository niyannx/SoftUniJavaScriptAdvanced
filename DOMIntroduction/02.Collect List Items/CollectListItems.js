function extractText() {
    const resultField = document.getElementById("result");

    let result = "";

    const nodes = Array.from(document.getElementById("items").getElementsByTagName("li"));

    nodes.forEach(node => {
        result += node.textContent;
        result += "\n";
    });

    resultField.value = result;
}