const assertEqual = function (actual, expected) {
  let emojiError = String.fromCodePoint(0x1F621);
  let emojiCorrect = String.fromCodePoint(0x2705);

  if (actual === expected) {
    console.log(`${emojiCorrect} Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`${emojiError} Assertion Failed: [actual] !== [expected]`);
  }
};

const tail = function (arr) {
  return arr.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const newArr = tail(words); // no need to capture the return value since we are not checking it
assertEqual(newArr[0], 'Lighthouse');
assertEqual(newArr[1], 'Labs');
assertEqual(words.length, 3); // original array should still have 3 elements!
