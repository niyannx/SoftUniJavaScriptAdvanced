function solve() {
  let text = (document.getElementById("text").value).toLowerCase().split(/\s+/);
  let convention = (document.getElementById("naming-convention").value).toLowerCase();

  let result = 'Error!';

  if (convention === 'camel case') {
    result = '';

    for (let i = 0; i < text.length; i++) {
      let word = text[i];

      if (i === 0) {
        result += word;
      } else {
        result += word[0].toUpperCase() + word.slice(1, word.length);
      }
    }
  } else if (convention === 'pascal case') {
    result = '';
    
    for (const word of text) {
      result += word[0].toUpperCase() + word.slice(1, word.length);
    }
  }

  document.getElementById("result").textContent = result;
}