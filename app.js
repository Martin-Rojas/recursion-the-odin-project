function sumRange(n, totalSum = 0) {
  if (n == 1) {
    return 1;
  } else return n + sumRange(n - 1);
}

//console.log(sumRange(3));

function power(exponent, base) {
  if (exponent == 0) {
    return 1;
  } else return base * power(exponent - 1, base);
}

//console.log(power(4, 2));

function factorial(n) {
  if (n == 1) return 1;
  else return n * factorial(n - 1);
}

//console.log(factorial(5));

function all(array, callbackFunction) {
  let copy = [...array];
  console.log(copy + ` length ${copy.length}`);

  if (copy.length == 0) return true;

  if (callbackFunction(copy[0])) {
    copy.shift();
    return all(copy, callbackFunction);
  } else return false;
}
const allAreLessThanSeven = all([1, 2, 4, 3, 5,19], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven);
