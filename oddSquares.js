function oddSquares(arr) {
  let odd = arr.filter((a) => a % 2 !== 0);
  return odd.map((a) => Math.pow(a, 2));
}
