
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adnan.aq/lotide`

**Require it:**

`const _ = require('@adnan.aq/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(...)`: retuns true if both arrays are strictly equal and of same length, otherwise false.
* `assertEqual(...)`: console logs if the actual and expected results are same.
* `assertArraysEqual(...)`: uses eqArray() to compare two arrays and console logs if true or false.
* `eqObjects(...)`: checks strict equality if both objects are same or not.
* `assertObjectsEqual(...)`: console logs after checking strict equality.
* `countLetters(...)`: returns the object with each letter and its count in sentence.
* `countOnly(...)`: returns the total count of given keys.
* `findKey(...)`: returns the key of the given value.
* `findKeyByValue(...)`: returns the key of the value.
* `head(...)`: returns the first element in aray.
* `tail(...)`: returns the array without head element.
* `middle(...)`: returns the array with middle element.
* `withOut(...)`: returns new array with elements not present in second array.