function solve() {
  let input = document.getElementById("input").value.split(".").filter(paragraph => paragraph.length > 0);
  let output = document.getElementById("output");

  for (let i = 0; i < input.length; i += 3) {
    let result = [];

    for (let l = 0; l < 3; l++) {
      if (input[i + l]) {
        result.push(input[i + l]);
      }
    }
    
    let paragraph = result.join('. ') + '.';

    output.innerHTML += `<p>${paragraph}</p>`;
  }
} 