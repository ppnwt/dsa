function maxSubarraySum(arr, k) {
  if (k > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  // initialize the window
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // slide the window over the array
  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

let arr = [1, 4, 2, 10, 23];
let k = 3;
console.log(maxSubarraySum(arr, k));
