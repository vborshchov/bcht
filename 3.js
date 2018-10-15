'use strict'
var bench = require('./bench')

var isInCircle = function(r, x, y) {
    return Math.sqrt(x*x + y*y) < r
}

console.log('isInCircle(1, 2, 4) => false : ', isInCircle(1, 2, 4) )
console.log('isInCircle(5, 2, 4) => true : ', isInCircle(5, 2, 4))
console.log('isInCircle(1.25, 0.88, 0.88) => true : ', isInCircle(1.25, 0.88, 0.88))
console.log('isInCircle(1.25, 0.89, 0.88) => false : ', isInCircle(1.25, 0.89, 0.88))