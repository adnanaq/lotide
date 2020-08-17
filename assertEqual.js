const assertEqual = function (actual, expected) {
  let emojiError = String.fromCodePoint(0x1F621)
  let emojiCorrect = String.fromCodePoint(0x2705)
  if (actual === expected) {
    console.log(`${emojiCorrect} Assertion Passed: [actual] === [expected]`)
  } else {
    console.log(`${emojiError} Assertion Failed: [actual] !== [expected]`)
  }
};

//Test Code
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual('Lighthouse', 'Lighthouse');
assertEqual(1, 1);
assertEqual(1, 2);