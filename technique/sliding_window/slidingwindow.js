function slidingWindow(arr, k) {
  let maxSum = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  for (right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (right - left + 1 < k) {
      continue;
    } else if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[left];
      left++;
    }
  }
  return maxSum;
}

console.log(slidingWindow([2, 1, 5, 1, 3, 2], 3));
