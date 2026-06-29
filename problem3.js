const numbs = [1, 2, 3, 1];

function containsDuplicate(nums) {
  const unique = new Set(nums);
  return unique.size !== nums.length;
}

console.log(containsDuplicate(numbs));

// return true

const numbs = [2, 7, 11, 15];

function containsDuplicate(nums) {
  const unique = new Set(nums);
  return unique.size !== nums.length;
}

console.log(containsDuplicate(numbs));

// return false
