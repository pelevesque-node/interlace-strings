'use strict'

const interlaceArrays = require('interlace-arrays')

module.exports = (arrayOfStringsToInterlace) =>
  interlaceArrays(arrayOfStringsToInterlace.map(x => x.split(''))).join('')
