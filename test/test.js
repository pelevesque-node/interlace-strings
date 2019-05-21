/* global describe, it */
'use strict'

const expect = require('chai').expect
const interlaceStrings = require('../index')

describe('#interlaceStrings()', () => {
  it('should return an empty string when strings are empty', () => {
    const str1 = ''
    const str2 = ''
    const result = interlaceStrings([str1, str2])
    const expected = ''
    expect(result).to.equal(expected)
  })

  it('should return the first string if other strings are empty', () => {
    const str1 = 'aaa'
    const str2 = ''
    const str3 = ''
    const result = interlaceStrings([str1, str2, str3])
    const expected = 'aaa'
    expect(result).to.equal(expected)
  })

  it('should return the second string if other strings are empty', () => {
    const str1 = ''
    const str2 = 'bbb'
    const str3 = ''
    const result = interlaceStrings([str1, str2, str3])
    const expected = 'bbb'
    expect(result).to.equal(expected)
  })

  it('should interlace two strings of equal length', () => {
    const str1 = '12345'
    const str2 = 'abcde'
    const result = interlaceStrings([str1, str2])
    const expected = '1a2b3c4d5e'
    expect(result).to.equal(expected)
  })

  it('should interlace three strings of equal length', () => {
    const str1 = '12345'
    const str2 = 'abcde'
    const str3 = '!@#$%'
    const result = interlaceStrings([str1, str2, str3])
    const expected = '1a!2b@3c#4d$5e%'
    expect(result).to.equal(expected)
  })

  it('should interlace three strings of different lengths from longest to shortest', () => {
    const str1 = '123456'
    const str2 = 'abcd'
    const str3 = '!@'
    const result = interlaceStrings([str1, str2, str3])
    const expected = '1a!2b@3c4d56'
    expect(result).to.equal(expected)
  })

  it('should interlace three strings of different lengths from shortest to longest', () => {
    const str1 = '12'
    const str2 = 'abcd'
    const str3 = '!@#$%^'
    const result = interlaceStrings([str1, str2, str3])
    const expected = '1a!2b@c#d$%^'
    expect(result).to.equal(expected)
  })
})
