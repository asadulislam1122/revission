function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Hello World"));

// Second problem

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World from JavaScript"));

//  Third problem

function revarsed(str) {
  return str.split("").reverse().join("");
}

console.log(revarsed("Hello World"));
