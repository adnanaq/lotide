const assertEqual = function (actual, expected) {
  let emojiError = String.fromCodePoint(0x1F621)
  let emojiCorrect = String.fromCodePoint(0x2705)
  if (actual === expected) {
    console.log(`${emojiCorrect} Assertion Passed: [actual] === [expected]`)
  } else {
    console.log(`${emojiError} Assertion Failed: [actual] !== [expected]`)
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        return false
      }

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(Array.isArray(object1[key]), Array.isArray(object2[key]))) {
          return true
        }
      }
    }
    return true
  }
  return false
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, cd), true);
assertEqual(eqObjects(cd, cd2), false);
