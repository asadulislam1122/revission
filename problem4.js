// const s = "asadul";
// const t = "luabsad";

// function isAnagram(s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// }

// console.log(isAnagram(s, t));

const a = "anagram";
const b = "nagaram";

function letter(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(letter(a, b));
