const reverseString = (str) => {
  return str.split("").reverse().join("");
};
// console.log(reverseString("developer"));

const string = (str) => {
  return str.split("");
};

// console.log(string("developer"));

const revaseS = (str) => {
  return str.split("").reverse().join("");
};

// console.log(revaseS("Programer"));

const reverseString2 = (str) => {
  let revarsed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revarsed += str[i];
  }
  return revarsed;
};

console.log(reverseString2("developer"));
