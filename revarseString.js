// First example

function revarseString(str) {
  return str.split("").reverse().join("");
}
console.log(revarseString("developer"));

// Second example

function revarseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(revarseString("developer"));

// Third example

function revarseString(str) {
  let reversed = "";
  for (let c of str) {
    reversed = c + reversed;
  }
  return reversed;
}
console.log(revarseString("amr sonar bangla ami tomake valobasi"));
