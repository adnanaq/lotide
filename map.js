const map = (array, call_back) => {

  const arr = [];

  for (let item of array) {
    arr.push(call_back(item))
  }
  return arr
}

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

  if (eqArrays(array1, array2)) {
    console.log(`${emojiCorrect} Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`${emojiError} Assertion Failed: [actual] !== [expected]`);
  }
}


const words = ["ground", "control", "to", "major", "tom"];


const result = map(words, word => word[0])

assertArraysEqual(result, ['g', 'c', 't', 'm', 't'])

