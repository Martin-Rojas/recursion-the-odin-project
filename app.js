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
  //console.log(copy + ` length ${copy.length}`);

  if (copy.length == 0) return true;

  if (callbackFunction(copy[0])) {
    copy.shift();
    return all(copy, callbackFunction);
  } else return false;
}
const allAreLessThanSeven = all([1, 2, 4, 3, 5, 19], function (num) {
  return num < 7;
});

//console.log(allAreLessThanSeven);

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const contains = (nestedObject, searchValue) => {
  if (typeof nestedObject !== "object" || nestedObject === null) {
    return nestedObject === searchValue;
  }
  /* Object.values return an array of the values of nested objects*/
  for (const value of Object.values(nestedObject)) {
    if (contains(value, searchValue)) {
      return true;
    }
  }
  return false;
};

let hasIt = contains(nestedObject, 44);
let doesntHaveIt = contains(nestedObject, "foo");

// console.log(hasIt);
// console.log(doesntHaveIt);

const totalIntegers = (mulArr) => {
  //case base
  if (mulArr.length === 0) return 0;

  let total = 0;
  let firstElement = mulArr.shift();

  if (Array.isArray(firstElement)) {
    total += totalIntegers(firstElement); // It will count all integer of nested array
  } else if (Number.isInteger(firstElement)) {
    total += 1;
  }

  return total + totalIntegers(mulArr);
};
const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6, 8]]]); // 7
///console.log(seven);

const SumSquares = (list) => {
  if (list.length === 0) return 0;

  let total = 0;
  let firstItemList = list.shift();

  if (Array.isArray(firstItemList)) {
    total += SumSquares(firstItemList);
  } else if (Number.isInteger(firstItemList)) {
    total += firstItemList * firstItemList;
  }

  return total + SumSquares(list);
};

// var l = [1, 2, 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]];
// console.log(SumSquares(l)); // 1 = 1

// l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

const replicate = (times, num) => {
  if (times < 0) return [];

  if (times >= 1) {
    return [num, ...replicate(times - 1, num)];
  }
  return replicate(times - 1, num);
};

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
