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
