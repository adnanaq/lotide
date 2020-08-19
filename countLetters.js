const assertEqual = function (actual, expected) {
  let emojiError = String.fromCodePoint(0x1F621)
  let emojiCorrect = String.fromCodePoint(0x2705)
  if (actual === expected) {
    console.log(`${emojiCorrect} Assertion Passed: [actual] === [expected]`)
  } else {
    console.log(`${emojiError} Assertion Failed: [actual] !== [expected]`)
  }
};

const countLetters = function (sentence) {
  const result = {}
  for (let char of sentence) {
    if (char === ' ') {
      continue;
    }
    if (result[char]) {
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result
}

const output = countLetters("lighthouse in the house")

assertEqual(output['u'], 2)