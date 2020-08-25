const withOut = require('../without');
const assertArraysEqual = require('../assertArraysEqual')

withOut([1, 2, 3], [1])
withOut(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
withOut(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);