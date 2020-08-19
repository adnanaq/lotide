const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function (array1, array2) {
  let emojiError = String.fromCodePoint(0x1F621);
  let emojiCorrect = String.fromCodePoint(0x2705);
  const result = eqArrays(array1, array2)

  if (result) {
    console.log(`${emojiCorrect} Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`${emojiError} Assertion Failed: [actual] !== [expected]`);
  }
}


assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])// => false