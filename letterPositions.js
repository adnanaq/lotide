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


const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = []
    }
    results[sentence[i]].push(i)
  }
  return results;
};

assertArraysEqual(letterPositions('hello ').e, [1])
