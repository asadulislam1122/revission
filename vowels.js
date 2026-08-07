// const vowels = (str) => {
//   str = str.toLowerCase();
//   s = str.toUpperCase();
//   return s;
// };

// console.log(vowels("AsaduLLah"));

const vowels = (str) => {
  let count = 0;
  const vowelList = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowelList.includes(char)) {
      count++;
    }
  }

  return count;
};

// console.log(vowels("JavaScript"));

const vowels2 = (str) => {
  let count = 0;
  const vowelList = "aeiou";
  for (let char of str.toLowerCase()) {
    if (vowelList.includes(char)) {
      count++;
    }
  }
  return count;
};

// console.log(vowels2("asaduLLah"));

//  problem 3

const isPlaindrome = (str) => {
  str = str.toLowerCase();

  const revarseStr = str.split("").reverse().join("");
  return str === revarseStr;
};

// console.log(isPlaindrome("madam"));

// problem 4

const bigNumber = (arr) => {
  const biggestNumber = Math.max(...arr);
  return biggestNumber;
};

console.log(bigNumber([11, 2, 3, 4, 5, 6, 7, 8, 9]));

// problem 5

const bN = (a) => {
  const bNu = Math.max(...a);
  return bNu;
};
console.log(bN([111, 2, 3, 4, 5, 6, 7, 8, 9]));

// a = 10;
// b = "10";
// console.log(a == b);
// console.log(a === b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a + b);
// *********************************************
// ************************************************
// problem 6
