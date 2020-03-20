const assert = require('assert')
const pass = require('i-should-pass')

try {
  assert.strictEqual(pass, true)
  console.log('Test passed')
} catch (err) {
  console.log('Test failed')
  throw (err)
}
