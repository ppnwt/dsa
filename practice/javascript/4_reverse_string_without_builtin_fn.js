function reverseStringWihoutBuiltInFn(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Time complexity: O(n)
// Space complexity: O(1)

console.log(reverseStringWihoutBuiltInFn("hello"));
