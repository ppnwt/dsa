function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) longestWord = word;
  });

  return longestWord;
}

console.log(findLongestWord("The quick brownie aaa"));

// Time complexity: O(n)
// Space complexity: O(1)
