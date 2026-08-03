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

// console.log(reverseString2("developer"));

// problem 2

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// other way

const findMax2 = (arr) => {
  return Math.max(...arr);
};
console.log(findMax2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// end
