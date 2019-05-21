'use strict'

const interlaceArrays = require('interlace-arrays')

module.exports = (arrayOfStringsToInterlace) => {
  return interlaceArrays(arrayOfStringsToInterlace.map(x => x.split(''))).join('')
}
