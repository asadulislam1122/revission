const numbs = [2, 7, 11, 15];
const target = 9;
const result = twoSum(numbs, target);

function twoSum(numbs, target) {
  const map = new Map();
  for (let i = 0; i < numbs.length; i++) {
    const complement = target - numbs[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(numbs[i], i);
  }
  return null;
}
console.log(result);
