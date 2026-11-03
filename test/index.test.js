import { greet, add } from '../src/index.js'
import assert from 'node:assert'
assert.equal(greet('world'), 'Hello, world!')
assert.equal(add(2, 3), 5)
console.log('✓ library tests passed')
