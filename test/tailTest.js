const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const newArr = tail(words); // no need to capture the return value since we are not checking it
assertEqual(newArr[0], 'Lighthouse');
assertEqual(newArr[1], 'Labs');
assertEqual(words.length, 3); // original array should still have 3 elements!