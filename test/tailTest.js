const tail = require('../tail');
const assert = require('chai').assert;


const words = ["Yo Yo", "Lighthouse", "Labs"];
const newArr = tail(words); // no need to capture the return value since we are not checking it

describe('#tail', () => {
  it('return the "Lighthouse" as first element', () => {
    assert.strictEqual(newArr[0], 'Lighthouse')
  });
  it('return the "Lab" as seond element', () => {
    assert.strictEqual(newArr[1], 'Labs')
  });
  it('return the length of 3 of original array', () => {
    assert.strictEqual(words.length, 3)
  });
})