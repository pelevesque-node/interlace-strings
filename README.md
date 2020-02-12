[![Build Status](https://travis-ci.org/pelevesque/interlace-strings.svg?branch=master)](https://travis-ci.org/pelevesque/interlace-strings)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/interlace-strings/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/interlace-strings?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# interlace-strings

Interlaces strings together.

## Node Repository

https://www.npmjs.com/package/@pelevesque/interlace-strings

## Installation

`npm install @pelevesque/interlace-strings`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

```js
const interlaceStrings = require('@pelevesque/interlace-strings')
```

```js
const str1 = '12345'
const str2 = 'abcde'
const arrayOfStrings = [str1, str2]
const result = interlaceStrings(arrayOfStrings)
// result === 1a2b3c4d5e
```

```js
const str1 = '12345678'
const str2 = 'abcdef'
const str3 = '!@#$'
const str4 = '_-'
const arrayOfStrings = [str1, str2, str3, str4]
const result = interlaceStrings(arrayOfStrings)
// result === 1a!_2b@-3c#4d$5e6f78
```
