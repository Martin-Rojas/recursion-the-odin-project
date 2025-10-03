function sumRange(n, totalSum = 0) {
  if (n == 1) {
    return 1;
  } else return n + sumRange(n - 1);
}

console.log(sumRange(3));
