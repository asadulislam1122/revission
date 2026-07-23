const nums = [-1, 0, 3, 5, 1, 9, 12];
const target = 9;

function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
}
console.log(search(nums, target));

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetNumber = 9;

function bainarySearch(number, targetNumber) {
  for (let i = 0; i < number.length; i++) {
    if (number[i] === targetNumber) {
      return i;
    }
  }
}

console.log(bainarySearch(number, targetNumber));

// Chalange

const num = [10, 20, 30, 40, 50];

function search(num, target) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(search(num, 40));

// Ans = 3
