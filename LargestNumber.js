function secondlargestNumber(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
  }
  return secondLargest;
}

// console.log(secondlargestNumber([50, 40, 30, 20]));

function secondlargestNumber(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondlargestNumber([50, 40, 30, 20]));
console.log(secondlargestNumber([10, 20, 30, 40, 50]));
