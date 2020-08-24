const middle = function (array) {

  const middleElem = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return []
  }

  if (array.length % 2 === 1) {
    return [array[middleElem]]
  }

  return [array[middleElem - 1], array[middleElem]]
}

module.exports = middle;