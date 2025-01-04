function findMaxConsecutiveOnes(nums) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(max, count);
  }
  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

// Time complexity: O(n)
// Space complexity: O(1)
