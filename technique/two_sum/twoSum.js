function twoSumHashing(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return [map.get(arr[i]), i];
    } else {
      map.set(target - arr[i], i);
    }
  }
  return [];
}

// Time complexity: O(n)
// Space complexity: O(n)

console.log(twoSumHashing([2, 7, 11, 15], 9));

function twoSumBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSumBruteForce([2, 7, 11, 15], 9));

// Time complexity: O(n^2)
// Space complexity: O(1)
