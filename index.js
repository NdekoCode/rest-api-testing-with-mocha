function multiply(n) {
  let rad;
  for (let index = 0; index < n; index += 1) {
    rad = n * index;
  }
  return rad;
}
multiply(5);
const arr = [1, 2, 4].map((x) => x * 2);
multiply(arr.length);
