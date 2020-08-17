const assertEqual = function (actual, expected) {
  let emojiError = String.fromCodePoint(0x1F621)
  let emojiCorrect = String.fromCodePoint(0x2705)

  if (actual === expected) {
    console.log(`${emojiCorrect} Assertion Passed: [actual] === [expected]`)
  } else {
    console.log(`${emojiError} Assertion Failed: [actual] !== [expected]`)
  }
};

const head = function (arr) {
  if (!arr) {
    return undefined
  }
  return arr[0]
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);