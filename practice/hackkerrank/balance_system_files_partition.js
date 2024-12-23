function mostBalancedPartition(parent, files_size) {
  // Write your code here
  const n = parent.length;
  const totalSum = files_size.reduce((a, b) => a + b, 0);
  const child = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    if (parent[i] !== -1) {
      child[parent[i]].push(i);
    }
  }

  let minD = Infinity;

  function dfs(node) {
    let subTreeSum = files_size[node];

    for (let c of child[node]) {
      subTreeSum += dfs(c);
    }

    // cal different if remove
    const diff = Math.abs(totalSum - 2 * subTreeSum);
    if (node !== 0) {
      minD = Math.min(minD, diff);
    }

    return subTreeSum;
  }

  dfs(0);
  return minD;
}
