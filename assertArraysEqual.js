const eqArrays = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
  let emojiError = String.fromCodePoint(0x1F621);
  let emojiCorrect = String.fromCodePoint(0x2705);

  if (eqArrays(array1, array2)) {
    console.log(`${emojiCorrect} Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`${emojiError} Assertion Failed: [actual] !== [expected]`);
  }
}

module.exports = assertArraysEqual;