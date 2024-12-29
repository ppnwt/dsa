function isPalindrome(str) {
  // use algorithm two pointers
  // time complexity: O(n)

  if (typeof str !== "string") {
    return false;
  }

  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

console.log(isPalindrome("tenet"));
console.log(isPalindrome("abc"));
