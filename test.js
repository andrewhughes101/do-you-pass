const assert = require('assert')
const pass = require('i-should-pass')

try {
  assert.strictEqual(pass, true)
  console.log('Test passedß')
} catch (err) {
  console.log('Test failed')
  throw (err)
}
