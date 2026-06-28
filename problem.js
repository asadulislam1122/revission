// const numbs = [2, 7, 11, 15];
// const target = 9;
// const result = twoSum(numbs, target);

// function twoSum(numbs, target) {
//   const map = new Map();
//   for (let i = 0; i < numbs.length; i++) {
//     const complement = target - numbs[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(numbs[i], i);
//   }
//   return null;
// }
// console.log(result);

const numbs = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

const result = twoSum(numbs, target);
console.log(result);
