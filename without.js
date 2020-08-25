const withOut = function (arr, removeItem) {
  return arr.filter(e => removeItem.indexOf(e) === -1)
}

module.exports = withOut