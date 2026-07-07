function moveZeros(nums) {
  const nonZero = nums.filter((num) => num !== 0);
  const zeros = nums.filter((num) => num === 0);

  return [...nonZero, ...zeros];
}

// console.log(moveZeros([0, 1, 0, 1, 77, 0, 5, 3, 3, 5, 67, 3, 0, 12]));

const result = moveZeros([0, 1, 0, 1, 77, 0, 5, 3, 3, 5, 67, 3, 0, 12]);

console.log(result);

console.log(result.length);
