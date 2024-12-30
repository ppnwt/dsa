function removeDupArray(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(removeDupArray(arr));

/* description: remove duplicate array

Why use new Set ?
  - new Set() will remove duplicate value from array
  - new Set() will return array

Array.from()
  - Array.from() will return array


  Time complexity: O(n)
  Space complexity: O(n)

*/
