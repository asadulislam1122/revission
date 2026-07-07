function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("madam"));

function isletter(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isletter("medem"));
