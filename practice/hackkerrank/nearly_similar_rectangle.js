function nearlySimilarRectangles(sides) {
  // Write your code here

  const ratioMap = new Map();
  let pairCount = 0;

  for (let [w, h] of sides) {
    const factor = gcd(w, h);
    const normalizeV = `${w / factor}: ${h / factor}`;

    if (ratioMap.has(normalizeV)) {
      pairCount += ratioMap.get(normalizeV);
      ratioMap.set(normalizeV, ratioMap.get(normalizeV) + 1);
    } else {
      ratioMap.set(normalizeV, 1);
    }
  }

  return pairCount;
}
